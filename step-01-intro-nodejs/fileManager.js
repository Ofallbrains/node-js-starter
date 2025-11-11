const fs = require('fs')

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data
    } catch (error) {
        return 'Error reading file'
    }
}

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf8')
        return "File written"
    } catch (error) {
        return 'Error writing file'
    }
}

function fileExists(filePath) {
    return fs.existsSync(filePath)
}

module.exports = {
    readFile,
    writeFile,
    fileExists,
}