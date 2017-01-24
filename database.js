const rdb = require('rethinkdb');
const dbConfig = require('./config.json');
let conn;
rdb.connect(dbConfig.rethinkdb)
    .then((connection) => {
    console.log('Connecting RethinkDB...');
    conn = connection;
    return rdb.dbCreate('timeline').run(conn);
})
    .then(() => {
    console.log('Database "timeline" created!');
    return rdb.db('timeline').tableCreate('messages').run(conn);
})
    .then(() => console.log('Table "messages" created!'))
    .error((err) => console.log('ERROR', err))
    .finally(() => process.exit(0));
//# sourceMappingURL=database.js.map