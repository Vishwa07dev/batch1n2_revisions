


/**
 * Girl is doing the promise to marry
 * 
 * resolve is the function - executed when Promise is met
 * reject is the function - executed when Promise is not met
 * 
 */

function girlPromise(){
    return new Promise((resolve,reject)=>{
         /**
          * To bring aynchronicity
          */
         setTimeout(()=>{
              const reason = "Dad agreed";
              if(reason == "Dad agreed"){
                  resolve(); // Success
              }else{
                  //Failure
                  reject("Love, dad found some rich fat man !");
              }
         },3000);
    })
};

/**
 * Let's define the boy's action, who is waiting for
 * the girl's action
 */

girlPromise().then(()=>{
    console.log("Yayy, finally I married my love");
}).catch((err_msg)=>{
    console.log("Tinder Jindabad !");
})

