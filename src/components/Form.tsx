import { ChangeEventHandler, FormEventHandler, Fragment, useState } from 'react'
import { FormItem, Schema, SchemaObject } from '../useAutoForm'
import { parser } from '../parser'

type componenetProps = {
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
}: componenetProps) {
    const [errors, setErrors]=useState< Map<string, string[]> >(new Map())
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
                    <label htmlFor={obj.key}>{obj.key}</label>
                    <input type="text" name={obj.key} onChange={handleInputChange} value={formState[obj.key] ? formState[obj.key] : ''} />
                    {errors.has(obj.key) && errors.get(obj.key)?.map(error=>(<div>{error}</div>))}
                </Fragment>
            ))}
            <input type="submit" />
        </form>
    )
}

export default Form
