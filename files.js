const fs = require("fs")
// same as import


const dir = "my-files"
fs.mkdirSync(dir)

for (let i =1; i<=100; i++) {
    fs.writeFileSync(`${dir}/${i}.txt`, `Hello from ${i}`)
}
