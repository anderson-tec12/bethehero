import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api'

import LogoImg from '../../assets/logo.svg'

import './style.css'
export  default function Profile(){
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    useEffect( ()=>{
        api.get('profile',{
            headers:{
                Authorization:ongId
            }
        }).then( response => {
            setIncidents(response.data)
        })
    }, [ongId])


    async function handleDelete(id){
        try{
            await api.delete(`incidents/${id}`,{
                    headers:{
                        Authorization:ongId
                    }
                }
            )

            setIncidents(incidents.filter(incident => incident.id != id))
        }catch(err){
            alert('Erro ao deletar, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.removeItem('ongName')
        localStorage.removeItem('ongId')

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link> 
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02141" />
                </button>  
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map((incident, i ) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>
                        <button tyoe="button" onClick={ () => handleDelete(incident.id)}> <FiTrash2 size={20} color="#a8a8b3"/> </button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}