const fs = require("fs")

const dir = Date.now()
fs.mkdirSync(String(dir))

for (let i=1; i<=100; i++) {
	fs.writeFileSync(`${dir}/${i}.txt`, `Hello from index ${i}`)
}

