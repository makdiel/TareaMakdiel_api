import  express  from "express"
const producto = express();
import { getProducto, 
        postProducto, 
        putProducto, 
        deleteProducto
    } from "../controllers/productosController.js";

producto.get('', getProducto );

producto.post('', postProducto)

producto.put( '/:id', putProducto )

producto.delete('/:id', deleteProducto)

export { producto }
