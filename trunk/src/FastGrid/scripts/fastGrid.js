goog.provide('fg.fastGrid');

goog.require('fg.gridHeaderController');
goog.require('fg.gridContentController');


fg.fastGrid = function (options) {
    if (options) {
        this.columns = options.columns;
        this.rows = options.rows;
        this.theme = options.theme;

        this.canvas_ = document.getElementById(options.id);

        if (!this.canvasContext_) {
            this.canvasContext_ = this.canvas_.getContext('2d');
        }

        this.scrollController_ = new fg.scrollController();
        this.scrollController_.adjust(this.columns, this.rows);
        this.scrollController_.scrollChanged = this.scrollChangedCallback_.bind(this);

        this.header_ = new fg.gridHeaderController({
            canvasContext: this.canvasContext_,
            theme: this.theme,
            scrollController: this.scrollController_
        });

        this.content_ = new fg.gridContentController({
            canvasContext: this.canvasContext_,
            theme: this.theme,
            scrollController: this.scrollController_
        });

    }
};

fg.fastGrid.prototype.id = undefined;

/**
* Jquery object
*/
fg.fastGrid.prototype.canvas_ = undefined;

fg.fastGrid.prototype.columns = undefined;

fg.fastGrid.prototype.rows = undefined;

fg.fastGrid.prototype.theme = undefined;

fg.fastGrid.prototype.scrollChangedCallback_ = function() {
    this.render();
};

/**
*
*/
fg.fastGrid.prototype.render = function () {
    this.canvasContext_.clearRect(0, 0, this.canvas_.width, this.canvas_.height);
    this.header_.render(this.columns);
    this.content_.render(this.columns, this.rows);
};

fg.fastGrid.prototype.scrollUp = function () {
    this.scrollController_.scrollUp();
};

fg.fastGrid.prototype.scrollDown = function () {
    this.scrollController_.scrollDown();
};

fg.fastGrid.prototype.scrollRight = function () {
    this.scrollController_.scrollRight();
};

fg.fastGrid.prototype.scrollLeft = function () {
    this.scrollController_.scrollLeft();
};