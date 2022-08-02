import { FormItem, Schema, SchemaObject } from './useAutoForm'
import { Methods, Validator } from './validators'

/**
 * @desc    Used for checking an entire form against the schema provided
 * @param schema 
 * @param formState 
 * @returns 
 */
export function parser(schema: Schema, formState: FormItem) {
    let errorMap = new Map<string, string[]>()
    let isValid = true
    // Should this return an object or just run parse immediately and return results?
    return {
        parse: () => {
            schema.forEach((validationObj, key) => {
                let validationResults = check(validationObj, formState[key])
                if (!validationResults.isValid) {
                    errorMap.set(key, validationResults.errors)
                    isValid = false
                }
            })
            return { isValid, errors: errorMap }
        }
    }
}

/**
 * @desc  Checks the form field to validate its content against what is specified in the schema
 * @param validationObj 
 * @param value 
 * @returns 
 */
function check(validationObj: Methods, value: string | number) {
    let errorArray: string[] = []
    let validationState = validationObj.getState()
    let isValid = true

    if (validationState.min) {
        let minIsValid =
            (typeof value === 'string' && value.length >= validationState.min.val) || (typeof value === 'number' && value >= validationState.min.val)

        if (!minIsValid) {
            isValid = false
            let message =
                validationState.min.message ||
                (typeof value === 'string'
                    ? `Should contain at least ${validationState.min.val} characters`
                    : value === undefined
                    ? 'This field is required'
                    : `Should be greater than or equal to ${validationState.min.val}`)
            errorArray.push(message)
        }
    }

    if (validationState.max) {
        let maxIsValid =
            (typeof value === 'string' && value.length <= validationState.max.val) || (typeof value === 'number' && value <= validationState.max.val)
        if (!maxIsValid) {
            isValid = false
            let message =
                validationState.max.message ||
                (typeof value === 'string'
                    ? `Should contain at most ${validationState.max.val} characters`
                    : value === undefined
                    ? 'This field is required'
                    : `Should be less than or equal to ${validationState.max.val}`)
            errorArray.push(message)
        }
    }

    if (validationState.isEmail){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (typeof value === "string") {
            if (!value.match(mailformat)){
                isValid = false
                let message = validationState.isEmail.message || 'Please enter a valid email'
                errorArray.push(message)
            }

        }
    }

    return { errors: errorArray, isValid }
}
