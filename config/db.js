const Pool = require("pg").Pool; //creamos variable con postgres

const pool = new Pool({ //instancia con la configuración
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool; //exportamos la configuración