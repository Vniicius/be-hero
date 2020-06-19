const express = require ('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors(/*origin*/));
app.use(express.json());
app.use(routes);
/** rotas / recursos */

/**
 * Métodos http:
 * 
 * GET : Buscar uma informação
 * POST : Criar uma informação
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */

 /**
  * Tipos de parâmentros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após a interrogação (filtros, paginação)
  * Route params : Parâmentros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: select * from users
   * Query builder: table('users').select('*').whare()
   */

app.listen(3333);