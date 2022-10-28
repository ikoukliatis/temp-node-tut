const fs = require('fs');

console.log('start')

fs.readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    else {
        const first = result
        fs.readFile('./content/second.txt', 'utf8', (err,result) => {
            if (err) {
                console.log(err)
                return
            }
            else {
                const second = result;
                fs.writeFile(
                    './content/result-async.txt', 
                    `Here is the result : ${first}, ${second}\n`,
                    (err, result) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        console.log('done with this task')
                    })
            }
        })
    }
})
console.log('starting the next task')