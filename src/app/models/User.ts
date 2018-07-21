export class User {
    private _surname: string = null;
    private _name: string = null;
    private _patronymic: string = null;
    private _token: string = null;
    private _email: string = null;

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get patronymic(): string {
        return this._patronymic;
    }

    set patronymic(value: string) {
        this._patronymic = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
