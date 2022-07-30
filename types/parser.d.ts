import { FormItem, Schema } from './useAutoForm';
/**
 * @desc    Used for checking an entire form against the schema provided
 * @param schema
 * @param formState
 * @returns
 */
export declare function parser(schema: Schema, formState: FormItem): {
    parse: () => {
        isValid: boolean;
        errors: Map<string, string[]>;
    };
};
