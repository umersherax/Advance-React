import React, {useState} from 'react'

export default function useForm() {
    const inititalValues = {
        email : '',
        password : ''
    }
    const [values, setValues] = useState(inititalValues);
    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    }


    return [values, handleInput];
}
