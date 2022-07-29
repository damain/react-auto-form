import React from 'react';
import Form from './components/Form';
import { Methods } from './validators';
declare function useAutoForm(schema: Map<string, Methods>, initialState: object): (typeof Form | {
    schemaData: SchemaObject[];
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formState: FormItem;
})[];
export default useAutoForm;
export declare type FormItem = {
    [key: string]: string;
};
export declare type SchemaObject = {
    key: string;
    value: Methods;
};
