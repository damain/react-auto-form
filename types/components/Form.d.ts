import { ChangeEventHandler } from "react";
import { FormItem, SchemaObject } from "../useAutoForm";
declare type componenetProps = {
    schemaData: SchemaObject[];
    handleInputChange: ChangeEventHandler;
    formState: FormItem;
};
declare function Form({ schemaData, handleInputChange, formState }: componenetProps): JSX.Element;
export default Form;
