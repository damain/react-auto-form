import { ChangeEventHandler, useRef } from 'react'
import { SchemaObject } from '../useAutoForm'
import './styles.css'
type Props = {
    onChange: ChangeEventHandler
    value: string | number
    name: string
    fieldValidationObject: SchemaObject
    errors: Map<string, string[]>
}

function Input({ onChange, value, name, fieldValidationObject, errors }: Props) {
    let inputRef = useRef<HTMLInputElement>(null)
    let fieldSchema = fieldValidationObject.value.getState()
    let label = fieldSchema.label || fieldValidationObject.key
    let required = fieldSchema.isRequired ? true: false
    let placeHolder = fieldSchema.placeholder || ''
    let input: JSX.Element
    let showLabel = fieldSchema.isSubmit ? false : true
    let showErrors = fieldSchema.isSubmit ? false : true
    const getType = () => {
        if (fieldSchema.isPassword) return 'password'
        if (fieldSchema.isSubmit) return 'submit'
        if (fieldSchema.isNumber) return 'number'
        if (fieldSchema.isEmail?.val) return 'email'
        return 'text'
    }
    let fieldType = getType()

    const handleLabelClick = () => {
        inputRef.current?.focus()
        console.log('focusing')
    }

    function capitalize (val: string){
        let wordArray = val.split('')
        wordArray[0] = wordArray[0].toUpperCase()
        return wordArray.join("")
    }

    function getClasses(){
        return `afinput__field ${errors.has(fieldValidationObject.key) ? 'afinput__field--error': ''}`
    }

    switch (fieldType) {
        case 'submit':
            input = <input className={getClasses()} aria-label="submit" type={fieldType} value={capitalize(label)}/>
            break
        default:
            input = <input ref={inputRef} className={getClasses()} type={fieldType} value={value} name={name} onChange={onChange} placeholder={placeHolder} required={required}/>
            break
    }

    return (
        <div className="afinput">
            {showLabel && (
                <div className="afinput__label">
                    <label htmlFor={fieldValidationObject.key} onClick={handleLabelClick}>
                        {capitalize(label)} { required && <span className="afinput__label--required">*</span>}
                    </label>
                </div>
            )}
            {input}
            {showErrors && (
                <div className="afinput__error">
                    {errors.has(fieldValidationObject.key) && errors.get(fieldValidationObject.key)?.map((error) => <div>{error}</div>)}
                </div>
            )}
        </div>
    )
}

export default Input
