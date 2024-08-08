import axios from 'axios';
import { fetchToken } from './authService';

export const getOrgaos = async () => {
    try {
        const token = await fetchToken();

        const response = await axios.get('https://api.go.gov.br/sigac/atendimentos/v1.0/agendamento/listarCondominos', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        throw error;
    }
};
