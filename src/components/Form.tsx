import React from "react";
function Form({children}: {children: React.ReactElement}) {
    return <form>{children}</form>;
}

export default Form;