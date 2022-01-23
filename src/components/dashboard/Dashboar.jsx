import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Dashboar() {
    const redirect = useNavigate();

    const baseUrl = 'http://localhost:4331'

    const [user, setInfo] = useState('');


    useEffect(()=>{
        getInfo();
    },[]);

    const getInfo = async () => {
        const x = await axios.get(`${baseUrl}/get-info`, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        if(!x.data.valid){
            redirect('/')
        }
        setInfo(x.data.info);
        console.log(x.data.valid);

    }
    return (
        <div>
            <h1>Hello {user?.name} your account status is {user?.isAdmin ? "Admin" : "not admin"}</h1>
        </div>
    )
}
