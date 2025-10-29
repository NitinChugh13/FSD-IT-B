function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user registered");
            resolve();
        }, 5000);
    });
}

function send_email() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            console.log("Email sent");
          resolve();
        }, 3000);
    });
}

function Login() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            console.log("Data received");
            resolve();
        }, 300);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            console.log("Data Displayed");
            resolve();
        }, 7000);
    });
}

// register();
// send_email();
// Login();
// getData();
// displayData();
// console.log("Call the other function");

// function waitForFiveSeconds(){
//     const ms = new Date().getTime() + 5000;
//     // const ct = new Date().getTime();
//     while(new Date().getTime() < ms){
//         //do nothing
//     }
// }
// Problem is that when the time is different for each function then the output will be in different order
// callback hell which is solved using promise and async await
// register(()=>{
//     send_email(()=>{
//         Login(()=>{
//             getData(()=>{
//                 displayData(()=>{
//                     console.log("All functions are done");
//                 })
//             })
//         })
//     })
// })
async function runAll(){
await register();
await Login();
await getData();
await send_email();
await (() => console.log("All functions are done"));
}
runAll();

