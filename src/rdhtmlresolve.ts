import { utilFunc } from './util';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import * as argv from 'argv'


// Settng
interface Setting {
    debugLog:boolean,
    distFolderName:string,
    srcFolderName:string,
    basePath:string,
    regPattern:RegExp
    regFileNamePattern:RegExp
    regCopyFileNamePattern:RegExp
}

const setting:Setting = {
    debugLog:true,
    distFolderName:"html",
    srcFolderName:"html_src",
    basePath:"./",
    regPattern: /<!--\s*#include\s*virtual="(.*?)"\s*-->/,
    regFileNamePattern:/.*\.(html|css|md)/,
    regCopyFileNamePattern:/.*\.(png)/
}

argv.option({
    name: 'clear',
    short: 'c',
    type: "string",
    description: "clear",
    example: "'rdhtmlresolve -c'"    
})

const args = argv.run()
console.log(args);

if (args.options["clear"]) {
    console.log("clear!");
}

