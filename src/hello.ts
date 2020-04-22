import { utilFunc } from './util';
import * as fs from 'fs';
import * as path from 'path';


console.log("Hello, typescript!");
console.log(utilFunc("test"));
console.log(process.cwd());
const filePath:string = path.join(process.cwd(), "dist/util.js");
const text = fs.readFileSync(`${filePath}`, {encoding:"utf-8"});
console.log(text);
