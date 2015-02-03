fg.fastGridHeader = function (canvasContext, theme) {
    this.canvasContext_ = canvasContext;
    this.theme_ = theme;
};

/**
* @param {Array.<fg.fastGrid.Column>} columns
*/
fg.fastGridHeader.prototype.render = function (columns) {
    var columnIndex,
        columnsCount,
        column,
        x = 0,
        y = this.theme_.rowHeight;

    for (columnIndex = 0, columnsCount = columns.length; columnIndex < columnsCount; columnIndex++) {
        column = columns[columnIndex];

        this.canvasContext_.font = '11px Arial';
        this.canvasContext_.fillText(column.text, x, y);

        x += column.width;
    }
};