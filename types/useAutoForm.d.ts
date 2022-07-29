import validate from './validators';
declare type FormItem = {
    [key: string]: string;
};
declare type AFSchema = typeof validate;
declare function useAutoForm(schema: AFSchema[], initialState: object): (FormItem | (() => JSX.Element))[];
export default useAutoForm;
