import { ChangeEventHandler } from 'react';
import { SchemaObject } from '../useAutoForm';
import './styles.css';
declare type Props = {
    onChange: ChangeEventHandler;
    value: string | number;
    name: string;
    fieldValidationObject: SchemaObject;
    errors: Map<string, string[]>;
};
declare function Input({ onChange, value, name, fieldValidationObject, errors }: Props): JSX.Element;
export default Input;
