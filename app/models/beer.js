"use strict";
var Beer = (function () {
    function Beer(beerJson) {
        this._id = beerJson._id;
        this.name = beerJson.name;
        this.brewery = beerJson.brewery;
        this.style = beerJson.style;
        this.substyle = beerJson.substyle;
    }
    return Beer;
}());
exports.Beer = Beer;
//# sourceMappingURL=beer.js.map