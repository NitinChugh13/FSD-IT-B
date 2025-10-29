//fetch is an asynchronous function that return a promise that resolves to a response object.
//const pr = fetch(url,{})
// const url ="https://api.github.com/users/Nitinchugh13";
//pr.then((res)=> {res.json()})
//.then((data)=>{console.log(data)})
//.catch(err)=>{console.log(err),err.message});
//fetch(url).then((res)=>{res.json()}).then((data)=>{console.log(data)}).catch(err=>{console.log(err)});
const url = "https://api.github.com/users/nitinchugh13";
const pr = fetch(url);
pr.then((response)=> {
    return response.json();
}).then((data)=>{
    console.log("DATA:: ",data);
}).catch((err)=>{
    console.log("Error:: ",err.message);
}).finally(()=>{
    console.log("Inside Finally");
})