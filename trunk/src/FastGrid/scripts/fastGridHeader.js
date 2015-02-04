goog.provide('fg.gridHeaderController');

fg.gridHeaderController = function (options) {
    this.canvasContext_ = options.canvasContext;
    this.theme_ = options.theme;
    this.scrollController_ = options.scrollController;
};

/**
* @param {Array.<fg.Column>} columns
*/
fg.gridHeaderController.prototype.render = function (columns) {
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