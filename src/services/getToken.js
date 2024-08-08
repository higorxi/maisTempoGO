import { fetchToken } from '../../services/authService';

export default async function handler(req, res) {
    try {
        const token = await fetchToken();
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o token' });
    }
}
