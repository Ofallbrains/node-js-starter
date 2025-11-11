const fs = require('fs')
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);   
    }
    console.log(data)
})

//using readFileSync

const file = require('fs')
try {
    const data = file.readFileSync('data.txt', 'utf-8');
    console.log(data);
    
} catch (error) {
    console.log('Error reading files');
    
}
