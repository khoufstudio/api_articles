exports.show = (values, res) => {
    var status = (res.statusCode == 200) ? 'OK' : 'ERROR'
    var data = {
        'status'    : res.statusCode,
        'message'	: status,
        'results'	: values
    }

    // res.send(values.affectedRows)
    
    res.json(data)
    res.end()
}