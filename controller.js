
conn = require('./db_conn')
result = require('./result')

exports.read = (req, res, par = false) => {
    var qry = 'SELECT * FROM articles'
    if (par !== false) {
        qry = `SELECT * FROM articles WHERE id = ${par}`  
        console.log('dipilih tertentu')
    }

    conn.query(qry, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(`berhasil ${JSON.stringify(rows)}`)
            result.show(rows, res)
        }
    })
}

exports.create = (req, res) => {
    var title = req.body.title
    var createdAt = req.body.createdAt
    var updatedAt = req.body.updatedAt
    var body = req.body.body
    var archived = req.body.archived

    var qry = 'INSERT INTO `articles` (`id`, `title`, `createdAt`, `updatedAt`, `body`, `archived`) VALUES (NULL, \'' + title + '\', \'' + createdAt + '\', \'' + updatedAt + '\', \'' + body + '\', \'' + archived +'\')'
    console.log(qry)

    conn.query(qry, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(`berhasil ${JSON.stringify(rows)}`)
            result.show(rows, res)
        }
    })
}

exports.update = (req, res) => {
    var id = req.params.id
    var title = req.body.title
    var createdAt = req.body.createdAt
    var updatedAt = req.body.updatedAt
    var body = req.body.body
    var archived = req.body.archived

    var qry = `UPDATE articles SET title = '${title}', createdAt = '${createdAt}', updatedAt = '${updatedAt}', body = '${body}', archived = '${archived}'  WHERE id = ${id};`
    console.log(qry)

    conn.query(qry, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(`berhasil ${JSON.stringify(rows)}`)
            result.show(rows, res)
        }
    })
}

exports.delete = (req, res) => {
    var id = req.params.id

    var qry = `DELETE FROM articles WHERE id = ${id}`
    console.log(qry)

    conn.query(qry, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(`berhasil ${JSON.stringify(rows)}`)
            result.show(rows, res)
        }
    })
}

