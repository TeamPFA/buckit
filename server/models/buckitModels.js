const { Pool } = require('pg');

const PG_URI = 'postgres://etzihlpw:YOK1E-lxPl3vdZYUeZAc8bBJOe3-VQqS@kashin.db.elephantsql.com/etzihlpw';


const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('QUERY EXECUTED: ', text);
    return pool.query(text, params, callback);
  }
};