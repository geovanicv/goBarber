import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Erro na autenticação do usuário' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // promisify transforma uma função de callback em async await
    // jwt.verify verifica o token passado na req com o secret do authConfig
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // adicionado ao req o id do usuario, assim em todas as rotas a partir desse
    // middleware terei acesso ao id do usuario
    req.userID = decoded.id;
  } catch (err) {
    return res.status(401).json({ error: 'Autenticação inválida' });
  }

  return next();
};
