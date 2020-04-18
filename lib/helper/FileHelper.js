const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class FileHelper{
    
    static writeFile(pathFileName, data){
        writeFile(pathFileName, data)
            .then(result => result)
            .catch(err => {
                throw err
            });
        /* fs.appendFile(`${path}/${fileName}`, data, (err) => {
            if(err){
                throw err;
            }
        }); */
    }

    static readFile(pathFileName){
        readFile(pathFileName)
            .then(result => result)
            .catch(err => {
                throw err
            });
        /* fs.readFile(pathFileName, (err, data) => {
            if (err){
                throw err
            }
            console.log("CONTEUDO ARQUIVO HELPER " + data)
            return data;
        }) */

    }
    
    static deleteFile(pathFileName){
        fs.unlink(pathFileName, err => {
            if (err){
                throw err
            }
        })
    }
}

module.exports = FileHelper;