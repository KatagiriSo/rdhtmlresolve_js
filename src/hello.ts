import { utilFunc } from './util';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline'


console.log("Hello, typescript!");
console.log(utilFunc("test"));
console.log(process.cwd());
console.log(JSON.stringify(process.env));

// read
const filePath:string = path.join(process.cwd(), "dist/util.js");
const text = fs.readFileSync(`${filePath}`, {encoding:"utf-8"});
console.log(text);


// write
fs.writeFileSync(path.join(process.cwd(), "dist/test.js"), "hello?");

// copy
fs.copyFileSync(path.join(process.cwd(), "dist/test.js"), path.join(process.cwd(), "dist/test2.js"));

// ls
const list = fs.readdirSync(path.join(process.cwd(), "/"), {withFileTypes:true});
console.log("readdirSync:"+list.map((f)=>f.name));

// readline and write
const readStream = fs.createReadStream(filePath, {encoding:"utf-8"});
const writeStream = fs.createWriteStream(path.join(process.cwd(), "dist/util2.js"));
const rwInterface = readline.createInterface({
    input: readStream,
    output: writeStream
});

rwInterface.on("line", (input) => {
    writeStream.write(input+'\n');
});

rwInterface.on('close', () => {
    console.log("end");
});

// reg
console.log('reg');
const results = "hogePoiPoge84754puge".match(/.*(Poi).*(\d{5}).*/);
if (results) {
    for (const result of results) {
        console.log("->"+result);
    }
} 
// ->hogePoiPoge84754puge
// ->Poi
// ->84754

