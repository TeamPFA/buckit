const { Pool } = require('pg');

const PG_URI = 'postgres://phrltjaa:FXToTt4Vwqx2Ct4hEsozE2g-Y8f99su-@kashin.db.elephantsql.com/phrltjaa';


const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('QUERY EXECUTED: ', text);
    return pool.query(text, params, callback);
  }
};