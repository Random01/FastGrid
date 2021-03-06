﻿goog.provide('fg.gridContentController');

/**
*
*/
fg.gridContentController = function (options) {
    this.canvasContext_ = options.canvasContext;
    this.theme_ = options.theme;
    this.scrollController_ = options.scrollController;
};

/**
*
*/
fg.gridContentController.prototype.render = function (columns, rows) {
    var rowIndex,
        rowsCount,
        columnIndex,
        columnsCount,
        row,
        column,
        x,
        y = this.theme_.rowHeight * 2,
        verticalBounds = this.scrollController_.getVerticalBounds(rows),
        horizontalBounds = this.scrollController_.getHorizontalBounds(columns);

    for (rowIndex = verticalBounds.startRowIndex, rowsCount = verticalBounds.endRowIndex; rowIndex < rowsCount; rowIndex++) {
        x = 0;
        row = rows[rowIndex];
        for (columnIndex = horizontalBounds.startColumnIndex, columnsCount = horizontalBounds.endColumnIndex; columnIndex < columnsCount; columnIndex++) {
            column = columns[columnIndex];
            this.drawCell_(row[column.id], x, y);

            x += column.width;
        }
        y += this.theme_.rowHeight;
    }

}

fg.gridContentController.prototype.drawCell_ = function (value, x, y) {
    this.canvasContext_.font = '11px Arial';
    this.canvasContext_.fillText(value, x, y);
};

