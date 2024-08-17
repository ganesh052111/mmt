
// // //variable types
// // //var
// // var a = 10 //re declare
// //     a = 5 //re assing
// //     console.log(a);
    
// // //let
// // let b = 10  // cant re declare
// //     b = 5   //re assing
// //     console.log(b);

// // //const

// // const c = 10   // cant re declare
// //       c = 5   // cant re assing
// //     console.log(c);

// // //syntax :

// // //variable_type variable_name = value

// // //var a = 10 //inisialaization
// // //

// // var assn = 10
// //  assn += 5
// //  console.log(assn);

// //  var assn = 10
// //  assn -= 5
// //  console.log(assn);

// //  var assn = 10
// //  assn *= 5
// //  console.log(assn);

 
// //  var assn = 10
// //  assn /= 5
// //  console.log(assn);


// // var assn = 10
// // assn %= 5
// // console.log(assn);


// // var assn = 10
// // assn **= 5
// // console.log(assn);


// // var assn = 10
// // assn ++ = 5
// // console.log(assn);


// // var assn = 10
// // assn --= 5
// // console.log(assn);

// // task 1 fuction statement using terinary operator
// // function tny(x) {
// // console.log((x<10)? true : false)
// // }
// // tny(15)

// // // task 2 array function using square value
// // var num = 5
// // let async = (x) => {
// //     console.log(num**x);
    
// // }
// // async(5)

// // var weather = 10
 
// // if(weather >= 50) {
// //     console.log("too hot")

// // }else if (weather>30 && weather<50){
// //     console.log("moderate")

// // }else if (weather>0 && weather<29){
// //     console.log("cold")

// // }else if (weather<0){
// //     console.log("no one can survive")
// // }

// // array methods

// //task 3 print num by decending order

// let num = [9,8,4,5,1,2,0,6,7,3]

// num.sort((a,b) => b-a)

// console.log(num);

// const obj = [
//     {
//         name : "gan",
//         dep : "IT",
//         role : "tester"
//     },
//     {
//         name : "jes",
//         dep : "EEE",
//         role : "manager"
//     },
//     {
//         name : "byrav",
//         dep : "CA",
//         role : "asst manager"
//     }
// ]
// const key = Object.keys(obj[0])
// console.log(key)

//For methods

//for in 
// const obj = {
//     name : "gane",
//     age : 30,
//     dep : "it"
// }

// for(let x in obj){
//     console.log(x+":"+obj[x]);
    
// }

//for each

// const arr = ["chocolate","bis","nuts","cosmetics"]

// arr.forEach((val,idx,accarray)=>console.log(val,idx,accarray)
// )

//for of

// let str = "javascript"
// for(let x of str){
//     console.log(x);
    
// }

//for in

// const obj = {
//     name : "gane",
//     age : 30,
//     dep : "IT"
// }
// for(let x in obj){
//     console.log(x);
    
// }





// MRF

//MAP

//  const num = [1,2,3,4,5,6,7,8,9,10]

// const maps = num.map((val,idx,accarr)=>val*5)

// console.log(maps);

// reduce

// const reduces = num.reduce((acc,val,idx,accarray) =>{

//     return acc+val 
// },50)

//filter

// console.log(reduces);

// const fils = num.filter((val,idx,accarr)=>val%2!=1)

// console.log(fils);


// template literals

//`${}`

// let a = "ganesh"

// let b = "50000"

// console.log(`hello ${a} and 
//     the number is ${b}`);
    
//setTimeout:
//arrowfunction
//()=>{}
// setTimeout(()=>{
//     console.log("hello im js");
    
// },2000)

//callback :

// function greet(name,callback){
//     console.log(`hello ${name}`);
//     callback()
// }

// function saygoodbye(){
//     console.log("goodbye");
    
// }
// greet("ganesh" , saygoodbye);

// function task1(callback){
//     console.log("task1");
//     callback()
// }
// function task2(callback){
//     console.log("task2");
//     callback()
// }
// function task3(callback){
//     console.log("task3");
//     callback()
// }
// function task4(callback){
//     console.log("task4");
//     callback()
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("task completed");
                
//             })
//         })
//     })
// })

//callback hell

function task1(callback){
    setTimeout(()=>{
    console.log("task1");
    callback()
},2000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("task2");
        callback()
    },1000);
}
function task3(callback){
    setTimeout(()=>{
        console.log("task3");
        callback()
    },5000);
}
function task4(callback){
    setTimeout(()=>{
        console.log("task4");
        callback()
    },3000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("task completed");
                
            })
        })
    })
})

































