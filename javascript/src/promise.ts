type TResolve<T> = (value: T) => void;
type TReject = (reason: any) => void;
type TSuccessCallBackHandler<T> = (value: T) => void;
type TFailureCallBackHandler = (value: any) => void;

type TExecutor<T> = (resolve: TResolve<T>, reject: TReject) => void;

enum EPromiseState {
    PENDING = "pending",
    FULFILLED = "fulfilled",
    REJECTED = "rejected",
}

class MyPromise<T> {
    private _state: EPromiseState;
    private _value: T | undefined;
    private _reason: any;

    private _successCallBackHandlers: TSuccessCallBackHandler<T>[];

    constructor(executor: TExecutor<T>) {
        this._state = EPromiseState.PENDING;
        this._value = undefined;
        this._reason = undefined;
        this._successCallBackHandlers = [];

        this._resolve.bind(this);

        executor(this._resolve, this._reject);
    }

    public after(handlerFn: TSuccessCallBackHandler<T>): MyPromise<T> {
        this._successCallBackHandlers.push(handlerFn);
        return this;
    }

    public error(handlerFn: TFailureCallBackHandler): MyPromise<T> {
        return this;
    }

    private _resolve(value: T): void {
        this._state = EPromiseState.FULFILLED;
        this._value = value;
    }

    private _reject(reason: any): void {
        this._state = EPromiseState.REJECTED;
        this._reason = reason;
    }
}
