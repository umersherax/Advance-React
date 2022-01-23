import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

const baseUrl = 'http://localhost:4331/'

export default function useApis(values) {
    const navigate = useNavigate();
    const [error, setError]   = useState(false);
    const submit = (form,e) => {

        e.preventDefault();
        const {name, email , password} = values;
        if(form === 'register'){
            if(!name || !email || !password){
                setError(true);
                return;
            }
        }
        else{
            if(!email || !password){
                setError(true);
                return;
            }
        }
        setError(false);
        postData(form);
    }

    const baseRequest = async (request) => {
        const {token, route} = request;
        return await Axios.post(`${baseUrl}${route}`,values,{
            headers: {
                'x-access-token': token || ''
            }
        });
    }


    async function postData(request){
        const res = await baseRequest(request);
        console.log(res.data)
        if(res.data.status === 'ok'){
            localStorage.setItem('token',res.data.token);
            navigate('/dashboard');
        }else{
            alert('User not found');
        }
    }
    return [submit, error, postData];
}
