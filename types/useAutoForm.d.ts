import React from 'react';
import Form from './components/Form';
import { Methods } from './validators';
declare function useAutoForm(schema: Schema, initialState: object): (typeof Form | {
    schema: Schema;
    schemaData: SchemaObject[];
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formState: FormItem;
})[];
export default useAutoForm;
export declare type Schema = Map<string, Methods>;
export declare type FormItem = {
    [key: string]: string | number;
};
export declare type SchemaObject = {
    key: string;
    value: Methods;
};
