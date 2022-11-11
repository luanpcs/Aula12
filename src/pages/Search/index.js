import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Search() {

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
                <Title name="Listar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRead}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Listar</button>

                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {user && 
                                        <tr key={1}>
                                            <td>{user.nome} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}