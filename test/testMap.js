// 用cjs
const sourceMap = require("source-map");
const fs = require("fs");

const data = fs.readFileSync("../dist/bundle.js.map").toString();
const consumer = new sourceMap.SourceMapConsumer(data);

consumer.then(c => {
    const s = c.originalPositionFor({line: 1, column: 0});
    // console.log('origin code for line: ', line, ', column: ', column);
    console.log('----------------------');

    // 输出原代码的8行到14行
    console.log(c.sourceContentFor(s.source).split("\n").slice(8, 14).join("\n"));

    console.log('----------------------');
})