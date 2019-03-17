const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/file1.txt'
const F2 = __dirname + '/file2.txt'
const F3 = __dirname + '/sorted.txt'

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

async function sort() {
    let data1 = await read(F1)
    let data2 = await read(F2)

    let nums = data1.toString().split('\n')

    nums = nums.concat(data2.toString().split('\n'))


}