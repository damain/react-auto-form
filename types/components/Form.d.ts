import { ChangeEventHandler } from 'react';
import { FormItem, Schema, SchemaObject } from '../useAutoForm';
declare type componenetProps = {
    schema: Schema;
    schemaData: SchemaObject[];
    handleInputChange: ChangeEventHandler;
    formState: FormItem;
    submitHandler: Function;
};
declare function Form({ schema, schemaData, handleInputChange, formState, submitHandler }: componenetProps): JSX.Element;
export default Form;
