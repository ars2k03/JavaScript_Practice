new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promised called");
        resolve();
    },2000)

}).then(
    function(){
        console.log("Success");
    }
).catch(
    function(){
        console.log("Error");
    }
)


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve("Success");
        }else{
            reject("Error");
        }
    }, 1000);
});

promiseOne.then((message)=> {
    console.log(message);
}).catch((error) => {
    console.log(error);
});