type numberValue = {
    val: number
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
}

const validate = () => {
    let s: Validator = {
        type: null,
        min: null,
        max: null,
        gt: null,
        lt: null,
        label: null,
        inputType: 'text',
        placeholder: null
    }
    let methods = {
        min: (val: number, message: string = '') => {
            s.min = { val, message }
            return methods
        },
        max: (val: number, message: string = '') => {
            s.max = { val, message }
            return methods
        },
        gt: (val: number, message: string = '') => {
            s.gt = { val, message }
            return methods
        },
        lt: (val: number, message: string = '') => {
            s.lt = { val, message }
            return methods
        },
        label: (val: string) => {
            s.label = val
            return methods
        },
        inputType: (val: string) => {
            s.inputType = val
            return methods
        },
        getState: () => {
            return s
        }
    }
    return methods
}

export default validate
