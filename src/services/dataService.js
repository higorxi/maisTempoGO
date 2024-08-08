import axios from 'axios';
import { fetchToken } from './authService';

export const getOrgaos = async () => {
    // try {
    //     const token = await fetchToken();

    //     const response = await fetch('https://api.go.gov.br/sigac/atendimentos/v1.0/agendamento/listarSenhas', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //             'Access-Control-Expose-Headers': 'Authorization', // Adicione cabeçalhos expostos se necessário
    //             'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization'
    //         },
    //     });

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     res.status(200).json(data);
    // } catch (error) {
    //     res.status(500).json({ error: 'Erro ao obter dados dos condomínios', details: error.message });
    // }
};
