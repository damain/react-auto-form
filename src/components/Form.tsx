import { ChangeEventHandler, Fragment } from "react";
import { FormItem, SchemaObject } from "../useAutoForm";

type componenetProps = {
    schemaData: SchemaObject[]
    handleInputChange: ChangeEventHandler
    formState: FormItem
}
function Form({ schemaData, handleInputChange, formState }: componenetProps) {
    return <form>
        {schemaData.map((obj) => (
                <Fragment key={obj.key}>
                    <label htmlFor={obj.key}>{obj.key}</label>
                    <input
                        type="text"    
                        name={obj.key}
                        onChange={handleInputChange}
                        value={formState[obj.key] ? formState[obj.key] : ''}
                    />
                </Fragment>
            ))}
    </form>;
}

export default Form;