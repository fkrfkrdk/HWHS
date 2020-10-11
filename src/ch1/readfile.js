const fs = require('fs')

fs.readFile('test2.txt', 'utf-8', testLoaded)

function testLoaded(err, data) {
    if(err) {
        console.log('failed reading')
        return
    }
    console.log(data)
}