import {db} from '../db/conn.js'

const getProducto = async (req,res)=>{

    const sql = `select * from productos order by codigo`;
    const result = await db.query(sql);
    res.json(result)

}

const postProducto = async (req, res)=>{

    const { nombre , precio} = req.body;
    const params =  [nombre, precio];
    
    const sql = `insert into productos 
                (nombre, precio )
                values 
                ($1, $2) returning * `

                    
    const result = await db.query(sql , params);

    res.json(result);    
}

const putProducto = async (req, res)=>{

    const {precio , nombre} = req.body
    const {codigo} =req.params

    const params = [
        nombre, 
        sonido, 
        id
    ]

    const sql = `update productos 
                  set
                   nombre = $1, 
                   precio = $2
                where codigo = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteProducto = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from productos where codigo = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getProducto, postProducto, putProducto, deleteProducto}