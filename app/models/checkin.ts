export class Checkin {
    public _id: string;
    public beerId: string;
    public comment: string;
    public rating: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(checkinJson: any) {
        this._id = checkinJson._id;
        this.beerId = checkinJson.beerId;
        this.comment = checkinJson.comment;
        this.rating = checkinJson.rating;
        this.createdAt = new Date(Date.parse(checkinJson.createdAt));
        this.updatedAt = new Date(Date.parse(checkinJson.updatedAt));
    }
}