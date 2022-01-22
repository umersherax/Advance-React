import {useState} from 'react';
import Axios from 'axios';

const baseUrl = 'http://localhost:4331/'

export default function useApis(values) {
    const [error, setError]   = useState(false);
    const submit = () => {
        const {email , password} = values;
        if(email === '' || password === ''){
            setError(true);
            return;
        }
        setError(false);
        postData();
    }

    function postData(){
        Axios.post(baseUrl,values);
    }


    return [submit, error];
}
