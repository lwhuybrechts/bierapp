export class Beer {
    public _id: string;
    public name: string;
    public brewery: string;
    public style: string;
    public substyle: string;

    constructor(beerJson: any) {
        this._id = beerJson._id;
        this.name = beerJson.name;
        this.brewery = beerJson.brewery;
        this.style = beerJson.style;
        this.substyle = beerJson.substyle;
    }
}