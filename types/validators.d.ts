declare type numberValue = {
    val: number;
    message: string;
};
declare type booleanValue = {
    val: boolean;
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
    isPassword: null | boolean;
    isRequired: null | boolean;
    isSubmit: null | boolean;
    isNumber: null | boolean;
    isEmail: null | booleanValue;
};
export declare type Methods = {
    min: (val: number, message?: string) => Methods;
    max: (val: number, message?: string) => Methods;
    gt: (val: number, message?: string) => Methods;
    lt: (val: number, message?: string) => Methods;
    label: (val: string) => Methods;
    inputType: (val: string) => Methods;
    getState: () => Validator;
    isPassword: () => Methods;
    isRequired: () => Methods;
    isSubmit: () => Methods;
    isNumber: () => Methods;
    isEmail: (message?: string) => Methods;
    placeholder: (message?: string) => Methods;
};
export declare const validate: () => Methods;
export {};
