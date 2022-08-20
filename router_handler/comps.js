const db = require('../db/index')
const { nanoid } = require("nanoid");

exports.publish = (req, res) => {
    const data = req.body;
    res.setHeader('Access-Control-Allow-Origin', '*');
    const sqlStr = `INSERT INTO pagedata (pageID, pageRemark, pageStruct) VALUES('${nanoid(10)}', '${data.pageRemark}', '${JSON.stringify(data.pageStruct)}')`;
    db.query(sqlStr, (err, respnse) => {
        if (err) {
            return res.send({ statue: 0, msg: err.message })
        }
        res.send({ status: 1, msg: 'success' })
    });
}

exports.getList = (req, res) => {
    const sqlStr = `SELECT * FROM pagedata;`;
    db.query(sqlStr, (err, response) => {
        if (err) {
            return res.send({ statue: 0, msg: err.message })
        }
        res.send({ status: 1, msg: JSON.stringify(response) })
    })
}