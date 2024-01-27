import pg from 'pg-promise'
const pgp = pg()
const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:5432/api_zoologico`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }