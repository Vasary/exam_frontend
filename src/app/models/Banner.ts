export class Banner {
    private _src: string;
    private _text: string;
    private _altText: string;
    private _showTime: number;

    constructor() {
        this._text = '';
        this._src = '';
        this._altText = '';
        this._showTime = 0;
    }

    set src(value: string) {
        this._src = value;
    }

    get src(): string {
        return this._src;
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

    set showTime(value: number) {
        this._showTime = value;
    }

    get showTime(): number {
        return this._showTime;
    }
}
