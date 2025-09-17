function register(){
    waitForFiveSeconds();
    console.log("user registered");
}
function send_email(){
    waitForFiveSeconds();
    console.log("Email sent");
}
function Login(){
    waitForFiveSeconds();
    console.log("User logged in");
}
function getData(){
    waitForFiveSeconds();
    console.log("Data received");
}
function displayData(){
    waitForFiveSeconds();
    console.log("Data Displayed");
}
register();
send_email();
Login();
getData();
displayData();
console.log("Call the other function");

function waitForFiveSeconds(){
    const ms = new Date().getTime() + 5000;
    // const ct = new Date().getTime();
    while(new Date().getTime() < ms){
        //do nothing
    }
}