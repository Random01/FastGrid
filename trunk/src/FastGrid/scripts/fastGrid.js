fg = {};

fg.fastGrid = function(options) {
    this.$canvas = $('#' + options.id);
    this.columns = options.columns;
    this.rows = options.rows;
};

fg.fastGrid.prototype.id = undefined;

/**
* Jquery object
*/
fg.fastGrid.prototype.$canvas = undefined;

fg.fastGrid.prototype.columns = undefined;

fg.fastGrid.prototype.rows = undefined;

fg.fastGrid.prototype.render = function () {

};