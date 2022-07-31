# Auto Form

## Aim

To generate forms based on validation schema supplied.

## Rationale

Often times we create forms and then have to create client side validation to validate these forms. This process seems like doubled work as form validation should hold enough info to describe forms.

We should be able to:

-   generate a form with the inputs in the schema,
-   tie them to state
-   validate the form on submit
-   show error messages on the form
-   make the internal form state constantly available

## Usage

### Importing

```js
import { af, useAutoForm } from '@damain/auto-form'
```

af is a chainable object that is used to describe the schema and set other details about the form elements

### Creating schema

```js
const loginSchema = new Map([
    ['username', af.string().min(1, { message: 'Please enter a username' })],
    ['password', af.string().isPassword().min(6, 'Password should be between 8-12 digits')]
])
```

### Using hook

The Api is exposed via a hook potentialy named useAutoForm

```jsx
const [LoginForm, formProps, resetForm, formState] = useAutoForm(loginSchema, initialValues)
const handleSubmit = (state) => {
    /*
    actions to complete are handled here
    state is an object that contains the val
    ues of the input elements inclusive of any hidden form values e.g.
    {
        username: "john",
        password: "mypass"
        hiddenField: "hidden form value"
    }
    */
}

return <LoginForm {...formProps} onSubmit={handleSubmit} />
```

## Styling inputs

Inputs are generated using regular html input elements and unscoped css that can be overridden.

The inputs are named according to the BEM naming convention as follows

.afinput

.afinput\_\_label

.afinput\_\_field

.afinput\_\_errors
