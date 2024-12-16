const {Pool} =require('pg');
module.exports = new Pool({
    connectionString:"postgresql://postgres:54321@localhost:5432/pokemons"
});
