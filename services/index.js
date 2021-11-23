const db = require('../store')

let newTodos = function (req, res) {
    const {
        text,
        done
    } = req.body
    db.todos.push({
        id: db.id,
        text: text,
        done: done
    })
    db.id++
    res.send(`Success add ${text}`)
}

let getData = function (req, res) {
    res.send(db.todos)
}

let deleteData = function (req, res) {
    const {
        id
    } = req.params
    const index = db.todos.findIndex(x => x.id === parseInt(id))
    db.todos.splice(index, 1)
    res.send({
        id: id,
        delete: true
    })
}

let updateData = function (req, res) {
    const {
        text,
        done
    } = req.body
    const {
        id
    } = req.params
    const index = db.todos.findIndex(x => x.id === parseInt(id))
    if (text == undefined && done == undefined) {
        res.send(`update id ${id} failed`)
    } else if (text == undefined) {
        db.todos[index].done = done
    } else if (done == undefined) {
        db.todos[index].text = text
    } else {
        db.todos[index].done = done
        db.todos[index].text = text
    }
    res.send(`update id ${id} success`)
}

module.exports = {
    new: newTodos,
    get: getData,
    delete: deleteData,
    update: updateData
}