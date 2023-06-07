import express from 'express';
import router from './modules/infraestructure/routes';
import bodyParser from 'body-parser';


const app = express();

app.use(express.json());
app.use('/api/v1', router);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen('3000', () => {
  console.log('listening on por 3000');
})