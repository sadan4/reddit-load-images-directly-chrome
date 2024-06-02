const fs = require("fs")
const path = require("path");

// require('dotenv').config()
// console.log(process.env)

const crx = require('crx');

const c = new crx({
    privateKey: process.env.KEY,
    codebase: "https://example.com/update.crx"
})

c.load( path.resolve(__dirname)).then(c => c.pack()).then(cb => {
    const xml = c.generateUpdateXML()
    fs.writeFileSync("./reddit-load-images-directly-chrome.crx", cb);
    fs.writeFileSync("./update.xml", xml);
}).catch(e => console.error(e))
