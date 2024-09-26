const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(200);
    }, 2000)
    console.log('Promise created')
})

myPromise().then((value) => {
    console.log('Promise resolved with data: ', value)
}).catch(() => {
    console.log('Promise rejected')
})

