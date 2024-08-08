import cors from '../../lib/cors';
import { getOrgaos } from '../../services/dataService';

export default async function handler(req, res) {
    await cors(req, res);

  try {
    const condominos = await getOrgaos();
    res.status(200).json(condominos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados dos condomínios' });
  }
}
