//Array destructuring 
const num = [10,20,30,40]
const [a,b,c,d] = num
console.log(a,b,c,d)
//Object destructuring
const person = {
    name:"Nitin",
    age:30,
    city:"Pune"
}
const {name,age,city} = person
console.log(name,age,city)
//Spreading and rest operator
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)
