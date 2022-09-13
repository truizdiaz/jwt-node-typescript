import express, { Application } from 'express';
import connection from '../db/connection';
import routesProducto from '../routes/producto.routes';
import routesDefault from '../routes/default.routes';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.conectDB();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        })
    }

    conectDB() {
        connection.connect((err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Base de datos conectada exitosamente!');
            }
        })
    }

    routes() {
        this.app.use('/', routesDefault);
        this.app.use('/api/productos', routesProducto );
    }

}

export default Server;

