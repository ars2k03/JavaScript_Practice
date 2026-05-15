// your code goes here
function getData() {
    return new Promise((resovle, rejected) => {
        setTimeout(() => {
            resovle({name : "Rahim", age : 20})
        }, 2000);
    })
}

console.log("Start....")

getData().then( user => {
    console.log("Name : " + user.name + ' Age : ' + user.age)
    console.log("Success!")
}).catch(error => console.log("Server Failed" + error))

console.log("Just Wait .... ");