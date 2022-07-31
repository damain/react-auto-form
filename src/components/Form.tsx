import { ChangeEventHandler, FormEventHandler, Fragment, useState } from 'react'
import { FormItem, Schema, SchemaObject } from '../useAutoForm'
import { parser } from '../parser'
import Input from './Input'

type componentProps = {
    schema: Schema
    schemaData: SchemaObject[]
    handleInputChange: ChangeEventHandler
    formState: FormItem
    submitHandler: Function
}
function Form({
    schema,
    schemaData,
    handleInputChange,
    formState,
    submitHandler = () => console.log('this form does not have a handler')
}: componentProps) {
    const [errors, setErrors] = useState<Map<string, string[]>>(new Map())
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()

        let result = parser(schema, formState).parse()
        setErrors(result.errors)
        console.log(result)
        if (result.isValid) {
            submitHandler(formState)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {schemaData.map((obj) => (
                <Fragment key={obj.key}>
                    <Input
                        name={obj.key}
                        onChange={handleInputChange}
                        fieldValidationObject={obj}
                        value={formState[obj.key] ? formState[obj.key] : ''}
                        errors={errors}
                    />
                </Fragment>
            ))}
        </form>
    )
}

export default Form
