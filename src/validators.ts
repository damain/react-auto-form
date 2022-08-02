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
    min: (val: number, message?: string) => Methods
    max: (val: number, message?: string) => Methods
    gt: (val: number, message?: string) => Methods
    lt: (val: number, message?: string) => Methods
    label: (val: string) => Methods
    inputType: (val: string) => Methods
    getState: () => Validator
    isPassword: () => Methods
    isRequired: () => Methods
    isSubmit: () => Methods
    isNumber: () => Methods
    isEmail: (message?: string) => Methods
    placeholder: (message?:string) => Methods
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
