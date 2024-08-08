import Cors from 'cors';
import initMiddleware from './init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS'],
        origin: 'https://www.go.gov.br/',
        credentials: true,
    })
);

export default cors;
