const db = require('../db/index')
const { nanoid } = require("nanoid");

exports.publish = (req, res) => {
    db.getConnection().then(conn => {
        const data = req.body;
        res.setHeader('Access-Control-Allow-Origin', '*');
        conn.query(`INSERT INTO pagedata (pageID, pageRemark, pageStruct) VALUES('${nanoid(10)}', '${data.pageRemark}', '${JSON.stringify(data.pageStruct)}')`)
            .then((rows) => {
                res.send({ statue: 1, msg: 'success' })
            })
            .catch(err => {
                res.send({ statue: 0, msg: err.message });
            })
    }).catch(err => {
        console.log('not connected', err.message);
    });
}

exports.getList = (req, res) => {
    db.getConnection().then(conn => {
        conn.query("SELECT * from pagedata")
            .then((rows) => {
                res.send({ statue: 1, msg: JSON.stringify(rows[0]) })
            })
            .catch(err => {
                res.send({ statue: 0, msg: err.message });
            })
    }).catch(err => {
        console.log('not connected', err.message);
    });
}