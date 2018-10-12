console.log('Before');

getUser(1)
.then((result)=>{
    getUsernames(result.username)
    .then((result2)=>{
    console.log(result2);
})
})

console.log('After');

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading a user');
            resolve({ id : id , username : 'Amrik' });
        },1000);
    })
}

function getUsernames(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading usernames array : '+username)
            resolve(['asd1', 'asd2', 'asd3']);
        },3000)
    })
}
