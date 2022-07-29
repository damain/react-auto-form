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
declare const validate: () => {
    min: (val: number, message?: string) => any;
    max: (val: number, message?: string) => any;
    gt: (val: number, message?: string) => any;
    lt: (val: number, message?: string) => any;
    label: (val: string) => any;
    inputType: (val: string) => any;
    getState: () => Validator;
};
export default validate;
