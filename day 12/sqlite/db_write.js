const sqlite = require('sqlite3')

const DB_PATH = __dirname + '/test.db'

const db = new sqlite.Database(DB_PATH)

db.serialize(() => {
    db.run(
        `CREATE TABLE if not exists tasks(
            id INTEGER AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            done BOOLEAN
        )`
    )

    // db.run(
    //     `INSERT INTO tasks  VALUES(
    //         1,'some task',true
    //     )`
    // )

    db.run(
        `INSERT INTO tasks VALUES(
            2,'some task',false
        )`
    )


})