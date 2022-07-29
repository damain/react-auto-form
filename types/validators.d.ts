declare type numberValue = {
    val: number;
    message: string;
};
export declare type Validator = {
    type: null | string;
    min: null | numberValue;
    max: null | numberValue;
    gt: null | numberValue;
    lt: null | numberValue;
    label: null | string;
    inputType: null | string;
    placeholder: null | string;
};
export declare type Methods = {
    min: (val: number, message: string) => Methods;
    max: (val: number, message: string) => Methods;
    gt: (val: number, message: string) => Methods;
    lt: (val: number, message: string) => Methods;
    label: (val: string) => Methods;
    inputType: (val: string) => Methods;
    getState: () => Validator;
};
export declare const validate: () => Methods;
export {};
