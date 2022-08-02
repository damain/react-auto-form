import { ChangeEventHandler } from 'react';
import { FormItem, Schema, SchemaObject } from '../useAutoForm';
declare type componentProps = {
    schema: Schema;
    schemaData: SchemaObject[];
    handleInputChange: ChangeEventHandler;
    formState: FormItem;
    submitHandler: (data: FormItem) => void;
};
declare function Form({ schema, schemaData, handleInputChange, formState, submitHandler }: componentProps): JSX.Element;
export default Form;
