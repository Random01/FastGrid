fg = {};

fg.fastGrid = function (options) {
    if (options) {
        this.columns = options.columns;
        this.rows = options.rows;
        this.theme = options.theme;

        this.canvas_ = document.getElementById(options.id);

        if (!this.canvasContext_) {
            this.canvasContext_ = this.canvas_.getContext('2d');
        }

        this.header_ = new fg.fastGridHeader(this.canvasContext_, this.theme);
        this.content_ = new fg.fastGridContent(this.canvasContext_, this.theme);
    }
};

fg.fastGrid.prototype.id = undefined;

/**
* Jquery object
*/
fg.fastGrid.prototype.canvas_ = undefined;

fg.fastGrid.prototype.columns = undefined;

fg.fastGrid.prototype.rows = undefined;

fg.fastGrid.prototype.render = function() {
    this.header.render(this.canvasContext_, this.columns);
};