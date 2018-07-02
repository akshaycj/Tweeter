new Promise((resolve,reject) =>{
    resolve('Done!')
    throw new Error('error')
})
.then(console.log)
