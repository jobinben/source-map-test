// 用cjs
// const sourceMap = require("source-map");
// const fs = require("fs");
import sourceMap from "source-map";
import fs from "fs";

const data = fs.readFileSync("../dist/bundle.js.map").toString();
const consumer = new sourceMap.SourceMapConsumer(data);

const GetLocation = (line, column) => {
    consumer.then(c => {
        const s = c.originalPositionFor({line, column});
        console.log('origin code for line: ', line, ', column: ', column);
        console.log('----------------------');
    
        // 输出原代码的第line行到line + 5行
        console.log(c.sourceContentFor(s.source).split("\n").slice(line, line + 5).join("\n"));
    
        console.log('----------------------');
    })
}

GetLocation(7, 15);
