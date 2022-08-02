import React from 'react';
import Form from './components/Form';
import { Methods } from './validators';
declare type useAutoFormReturn = [Form: typeof Form, _: {
    schema: Schema;
    schemaData: SchemaObject[];
    handleInputChange: React.ChangeEventHandler;
    formState: FormItem;
}, resetForm: Function];
declare function useAutoForm(schema: Schema, initialState: object): useAutoFormReturn;
export default useAutoForm;
export declare type Schema = Map<string, Methods>;
export declare type FormItem = {
    [key: string]: string | number;
};
export declare type SchemaObject = {
    key: string;
    value: Methods;
};
