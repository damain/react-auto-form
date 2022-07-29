import { FormEvent, useState } from 'react'
import Form from './components/Form'
import validate from './validators'

type FormItem = {
    [key: string]: string
}

type AFSchema = typeof validate
function useAutoForm(schema: AFSchema[], initialState: object) {
    const [formState, setFormState] = useState<FormItem>({})

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        setFormState((prev) => {
            let tempState = { ...prev }
            tempState[e.currentTarget.name] = e.currentTarget.value
            return tempState
        })
    }

    let GeneratedContent = schema.map((item) => {
                return <input type="text" onChange={handleInputChange} />
            })

    let component = ()=><Form>
        <>
            {GeneratedContent}
        </>
    </Form>        

    return [component, formState]
}

export default useAutoForm
