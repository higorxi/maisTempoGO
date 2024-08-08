import axios from 'axios';

export const fetchToken = async () => {
    try {
        const response = await axios.post('https://api.go.gov.br/token', null, {
            params: {
                grant_type: 'client_credentials',
                client_id: 'jMQoyH_T2GpWXwBlH6goWfBBdr0a',
                client_secret: 'k8BOsIHTF6sARfHq4qBPsvaYjf4a',
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        console.log(response.data.access_token)
        return response.data.access_token;
    } catch (error) {
        console.error('Erro ao obter o token:', error);
        throw error;
    }
};
