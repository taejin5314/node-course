const { response } = require("express")

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    cont sum = await add(1, 99)
}

doWork().then((result) => {
    console.log('Result: ', result);
}).catch((e) => {
    console.log('Error: ', e)
})