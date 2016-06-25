"use strict";
var Checkin = (function () {
    function Checkin(checkinJson) {
        this._id = checkinJson._id;
        this.beerId = checkinJson.beerId;
        this.comment = checkinJson.comment;
        this.rating = checkinJson.rating;
        this.createdAt = new Date(Date.parse(checkinJson.createdAt));
        this.updatedAt = new Date(Date.parse(checkinJson.updatedAt));
    }
    return Checkin;
}());
exports.Checkin = Checkin;
//# sourceMappingURL=checkin.js.map