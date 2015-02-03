
/**
*
*/
fg.fastGridContent = function (canvasContext, theme) {
    this.canvasContext_ = canvasContext;
    this.theme_ = theme;
};

/**
*
*/
fg.fastGridContent.prototype.render = function (columns, rows) {
    var rowIndex,
        rowsCount,
        columnIndex,
        columnsCount,
        row,
        column,
        x,
        y = this.theme_.rowHeight * 2,
        verticalBounds = this.getVerticalBounds_(),
        horizontalBounds = this.getHorizontalBounds_();

    for (rowIndex = verticalBounds.startRowIndex, rowsCount = verticalBounds.endRowIndex; rowIndex < rowsCount; rowIndex++) {
        x = 0;
        row = rows[rowIndex];
        for (columnIndex = 0, columnsCount = columns.length; columnIndex < columnsCount; columnIndex++) {
            column = columns[columnIndex];
            this.drawCell_(row[column.id], x, y);

            x += column.width;
        }
        y += this.theme_.rowHeight;
    }

}

fg.fastGridContent.prototype.drawCell_ = function (value, x, y) {
    this.canvasContext_.font = '11px Arial';
    this.canvasContext_.fillText(value, x, y);
};

/**
*
*/
fg.fastGridContent.prototype.getVerticalBounds_ = function () {
    return {
        startRowIndex: this.vertilaScrollPosition,
        endRowIndex: this.vertilaScrollPosition + 10
    };
};

fg.fastGridContent.prototype.getHorizontalBounds_ = function () {

};
