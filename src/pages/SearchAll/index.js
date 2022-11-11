import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function SearchAll() {

    const [obj, setObj] = useState('');

    async function handleSearch(e) {
        e.preventDefault();

        var update = await ClientUsers.searchUser();
        if (update.status === 200) {
            setObj(update.data);
            console.log(obj)
        
           
        } else {
            toast.error("Usuários não encontrados");
        }

    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSearch}>

                    <label> {obj[0].nome}</label>
                    
                    <label> {obj[0].email}</label>  

                    <button type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}