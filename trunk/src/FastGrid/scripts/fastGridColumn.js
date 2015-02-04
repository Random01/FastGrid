goog.provide('fg.fastGridColumn');

fg.fastGridColumn = function (options) {
    if (options) {
        this.text = options.text;
        this.width = options.width;
        this.id = options.id;
    }
};

fg.fastGridColumn.prototype.width = undefined;

fg.fastGridColumn.prototype.text = undefined;

fg.fastGridColumn.prototype.id = undefined;

