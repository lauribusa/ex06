const fs = require('fs');
const promisify = require('es6-promisify');
const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
module.exports = (req,res) => {
    if(req.method === 'GET'){
        let templPromise = read (`${process.cwd()}/models/books.json`);
        templPromise.then(json =>{
            res.setHeader('Content-type','application/json')
            res.end(json);
        }).catch(err =>{
            console.log(err);
        })   
    } else if (req.method === 'POST'){
        let formData ='';
        req.on('data',((data) =>{
            formData += data;
        }));
        req.on('end', () => {
            let templPromise = read (`${process.cwd()}/models/books.json`);
            templPromise.then(data) =>{
                    let tempArr = JSON.parse(data);
                    let jsonObj = JSON.parse(formData);
                    tempArr.push(jsonObject)
                    write(`${process.cwd()}/models/books.json`.JSON.stringify(tempArr))
                        .then(() => {
                            console.log(tempArr);
                            res.end(JSON.stringify(tempArr));
                        })
                }
            console.log('write to file', formData);
        })
    }
    
}