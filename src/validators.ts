type numberValue = {
    val: number
    message: string
}

type booleanValue = {
    val: boolean
    message: string
}

export type Validator = {
    type: null | string
    min: null | numberValue
    max: null | numberValue
    gt: null | numberValue
    lt: null | numberValue
    label: null | string
    inputType: null | string
    placeholder: null | string
    isPassword: null | boolean
    isRequired: null | boolean
    isSubmit: null | boolean
    isNumber: null | boolean
    isEmail: null | booleanValue
}

export type Methods = {
    min: (val: number, message?: string) => Methods // sets the min amount for number inputs and the minLength for text inputs
    max: (val: number, message?: string) => Methods // sets the max amount for number inputs and the maxLength for text inputs
    gt: (val: number, message?: string) => Methods
    lt: (val: number, message?: string) => Methods // 
    label: (val: string) => Methods // Sets the label text, if not included the fieldName/key is used instead
    inputType: (val: string) => Methods //intended to set the typescript type of the inputs data
    getState: () => Validator // returns the underlying validation object 
    isPassword: () => Methods // makes the input a passowrd field
    isRequired: () => Methods // shows * next to label and sets the required input attribute to true
    isSubmit: () => Methods // makes the input a submit button
    isNumber: () => Methods // make the input a number field
    isEmail: (message?: string) => Methods // makes the input an email field
    placeholder: (message?:string) => Methods // Sets the input placeholder text
}

export const validate = () => {
    let s: Validator = {
        type: null,
        min: null,
        max: null,
        gt: null,
        lt: null,
        label: null,
        inputType: 'text',
        placeholder: null,
        isPassword: null,
        isRequired: null,
        isSubmit: null,
        isNumber: null,
        isEmail: null
    }

    let methods: Methods = {
        min: (val, message = '') => {
            s.min = { val, message }
            return methods
        },
        max: (val, message = '') => {
            s.max = { val, message }
            return methods
        },
        gt: (val, message = '') => {
            s.gt = { val, message }
            return methods
        },
        lt: (val, message = '') => {
            s.lt = { val, message }
            return methods
        },
        label: (val) => {
            s.label = val
            return methods
        },
        inputType: (val) => {
            s.inputType = val
            return methods
        },
        getState: () => {
            return s
        },
        isNumber:()=>{
            s.isNumber = true
            return methods
        },
        isPassword: () => {
            s.isPassword = true
            return methods
        },
        isRequired: () => {
            s.isRequired = true
            return methods
        },
        isSubmit: () => {
            s.isSubmit = true
            return methods
        },
        isEmail: (message = '')=>{
            s.isEmail = {val: true, message}
            return methods
        },
        placeholder: (message='')=>{
            s.placeholder = message
            return methods
        }
    }

    return methods
}
