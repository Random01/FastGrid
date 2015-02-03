
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
fg.fastGridContent.prototype.render = function(columns, rows) {
    var rowIndex,
        rowsCount,
        columnIndex,
        columnsCount,
        row,
        column,
        x,
        y = this.theme_.rowHeight;

    for (rowIndex = 0, rowsCount = rows.length; rowIndex < rowsCount; rowIndex++) {
        x = 0;
        row = rows[rowIndex];
        for (columnIndex = 0, columnsCount = columns.length; columnIndex < columnsCount; columnIndex++) {
            column = columns[columnIndex];
            this.drawCell_(row[column.id]);

            x += column.width;
        }
        y += this.theme_.rowHeight;
    }

}

fg.fastGridContent.prototype.drawCell_ = function(value) {

};