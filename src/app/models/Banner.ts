export class Banner {
    private _link: string = "";
    private _text: string = "";
    private _altText: string = "";

    set link(value: string) {
        this._link = value;
    }

    get link(): string {
        return this._link;
    }

    set text(value: string) {
        this._text = value;
    }

    get text(): string {
        return this._text;
    }

    set altText(value: string) {
        this._altText = value;
    }

    get altText(): string {
        return this._altText;
    }
}