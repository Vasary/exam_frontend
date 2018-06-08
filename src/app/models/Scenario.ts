export class Scenario {
    private _uuid: string = null;
    private _action: number = null;

    set uuid(value: string) {
        this._uuid = value;
    }

    get uuid(): string {
        return this._uuid;
    }

    get action(): number {
        return this._action;
    }

    set action(value: number) {
        this._action = value;
    }
}
