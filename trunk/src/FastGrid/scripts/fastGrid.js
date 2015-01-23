fg = fg || {};

fg.fastGrid = function(options) {
    this.canvas = document.getElementById(options.id);
    this.columns = options.columns;
    this.rows = options.rows;
};

fg.fastGrid.prototype.id = undefined;

/**
* Jquery object
*/
fg.fastGrid.prototype.canvas = undefined;

fg.fastGrid.prototype.columns = undefined;

fg.fastGrid.prototype.rows = undefined;

fg.fastGrid.prototype.render = function() {
    if (!this.canvasContext_) {
        this.canvasContext_ = this.canvas.getContext('2d');
    }

    for (var columnIndex = 0, columnsLenght = this.columns; columnIndex < columnsLenght; columnIndex++) {
        
    }

    this.canvasContext_.fillStyle = '#FF0000';
    this.canvasContext_.fillRect(0, 0, 150, 75);
};