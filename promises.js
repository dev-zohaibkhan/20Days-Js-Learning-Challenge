let createPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log("Promise Work")  
      resolve({
        name: "zohaib khan",
        id: 22
      }) // if you don't use this method the then is not connect to promise
    }, 2000);
})
createPromise.then(function(userDetails){
    console.log("yes then is connected")
    console.log(userDetails)
})
console.log("i tested the async programming here!")