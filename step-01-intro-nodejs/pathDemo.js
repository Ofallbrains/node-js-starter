const path = require('path')
//path.join() to create file path (combines multiple paths segemtns into one normalised oath)
const filePath = path.join('users', 'denyse', 'documents', 'data.txt')
console.log(filePath);
//path.basename() getting the base name (returns the last portion of a path)
const fileName = path.basename(filePath)
console.log(fileName);
//path.extname() getting the file extension
const fileExtension = path.extname(fileName)
console.log(fileExtension)

