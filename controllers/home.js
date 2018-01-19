const fs = require('fs');
const promisify = require('es6-promisify');
const read = promisify(fs.readFile);
module.exports = (req,res) => {
    let templPromise = read (`${process.cwd()}/views/index.html`);
    templPromise.then(data =>{
        res.setHeader('Content-type', 'html')
        res.end(data);
    }).catch(err =>{
        console.log(err);
    })   
}