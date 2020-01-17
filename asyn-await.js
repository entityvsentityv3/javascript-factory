
async function f1() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=>resolve("With Await done!"), 1000);
    });

    let result = await promise;

    console.log(result);
}

f1();

function f2() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=>resolve("With Promise done!"), 1000);
    });

    promise.then(function(value) {
        console.log(value);
      });
      

    
}

f2();