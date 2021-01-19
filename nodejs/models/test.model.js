const db = require('./db');

const Test = (test) => {
    this.name = test.name;
}

// Album.getAll = result => {
    // sql.query("SELECT * FROM albums",(err,res)=> {
    //     if(err) {
    //         console.log("error: ", err);
    //         result(err,null);
    //         return;
    //     }
    //     console.log("res: ", res);
    //     result(null, res);
    // });
// }

Test.list = () => { 
    return db('a').select();
}

module.exports = Test;