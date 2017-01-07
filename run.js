const express = require('express');
const app = express();
const path = require('path');
const Datastore = require('nedb');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

app.get('/api/:table', (req, res) => {
    let db = getDatabase(req.params.table);

    db.find({}, (err, docs) => {
        if (err) {
            res.status(500).json({error: err});
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post('/api/:table', (req, res) => {
    let db = getDatabase(req.params.table);
    let item = req.body;
    db.insert(item, (err, docs) => {
        if (err){
            res.status(500).json({ error: err });
        }
        else{
            res.status(200).json(docs)
        }
    });
});

app.put('/api/:table/:id', (req, res) => {
    let db = getDatabase(req.params.table);
    let item = req.body;
    delete item._id;
    db.update({ _id: req.params.id }, { $set: item }, (err, docs) => {
        if (err){
            res.status(500).json({ error: err });
        }
        else{
            res.status(200).json({ message: "Success" });
        }
    })
});

app.delete('/api/:table/:id', (req, res) => {
    let db = getDatabase(req.params.table);

    db.remove({ _id: req.params.id }, (err, data) => {
        if (err){
            res.status(500).json({ error: err });
        }
        else{
            res.status(200).json({ message: "Success" });
        }
    })
});

app.listen(3000, () => {
    console.log("small-server now listening on port 3000.");
});

function getDatabase(table) {
    let db = new Datastore({
        filename: "./databases/" + table + ".dbs",
        autoload: true
    });
    return db;
}
