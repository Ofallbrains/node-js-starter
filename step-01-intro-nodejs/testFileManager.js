const path = require('path')
const fileManager = require('./fileManager')

const testFilePath = path.join(__dirname, 'test.txt');

const writeText = fileManager.writeFile(testFilePath, 'Hello, This is a test')
console.log(writeText);

const exists = fileManager.fileExists(testFilePath)
console.log(exists);

if (exists) {
    const message = fileManager.readFile(testFilePath);
    console.log(message);
    
}
