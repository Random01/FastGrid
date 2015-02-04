goog.provide('fg.scrollController');

fg.scrollController = function () {

};

fg.scrollController.prototype.horizontalPosition = 0;

fg.scrollController.prototype.verticalPosition = 0;

fg.scrollController.prototype.maxVerticalPosition = 0;

fg.scrollController.prototype.maxHorizontalPosition = 0;

/**
*
*/
fg.scrollController.prototype.adjust = function (columns, rows) {
    this.horizontalPosition = 0;
    this.verticalPosition = 0;
    this.maxVerticalPosition = rows.length;
    this.maxHorizontalPosition = columns.length;
};

/**
*
*/
fg.scrollController.prototype.scrollDown = function () {
    this.verticalPosition += 1;

    if (this.verticalPosition > this.maxVerticalPosition) {
        this.verticalPosition = this.maxVerticalPosition;
    }

    if (this.scrollChanged) {
        this.scrollChanged();
    }
};

/**
*
*/
fg.scrollController.prototype.scrollUp = function () {
    this.verticalPosition -= 1;

    if (this.verticalPosition < 0) {
        this.verticalPosition = 0;
    }

    if (this.scrollChanged) {
        this.scrollChanged();
    }
}
