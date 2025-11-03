import React, { useState } from 'react'
import './Book.css'

const Book = ({book}) => {
// let count = 0 it will not work
    const[count,setCount] = useState(0)
    const addToCart = ()=>{
        alert(`Successfully Added ${book.title} book`)
    }
    
    const increment = ()=>{
        setCount(count + 1)
        console.log(`book ref ${book.title} count = `+ count)
    }

    const decrement = ()=>{
         setCount(count - 1)
         console.log(`book ref ${book.title} count = `+ count)
    }
  return (
    
    <div className = 'card'>
      {/* <img src= "https://m.media-amazon.com/images/I/71zIDc0j0OL.jpg" width ={200} height= {200} alt ='image'/>
      <h3>Title: Physics</h3>
      <h4>Price : ₹460/-</h4>
      <button>Add To Cart</button> */}

    <img src={book.image} alt={book.title} width={200} height={200} />
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button onClick = {decrement}>-</button>
        <span>{count}</span>
        <button onClick ={increment} >+</button>
      </div>
      <button onClick = {addToCart}> Add To Cart</button> 
    </div>
  )
}

export default Book
