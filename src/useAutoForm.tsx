import React, {useState} from 'react'
import Form from './components/Form'
import { Methods } from './validators'



function useAutoForm(schema: Map<string, Methods>, initialState: object) {
    const [formState, setFormState] = useState<FormItem>({})
    const [schemaData] = useState(() => generateArray(schema))
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev =>{
            let tempState = { ...prev }
            tempState[e.target.name] = e.target.value
            return tempState
        })
    }
    return [Form, { schemaData, handleInputChange, formState }]
}

export default useAutoForm

export type FormItem = {
    [key: string]: string
}

export type SchemaObject = {
    key: string
    value: Methods
}

// Utils 
//TODO: maybe break out if it becomes larger

function generateArray (schema: Map<string, Methods>) {
    console.log('generating array')
    let content: SchemaObject[] = []
    schema.forEach((value, key) => content.push({ key, value }))
    return content
}