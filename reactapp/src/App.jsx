import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book'
import Header from './components/Header'
import Fotter from './components/Fotter'
import './app.css'

function App() {
  const [count, setCount] = useState(0)
  const data =[
        {image: "https://m.media-amazon.com/images/I/71zIDc0j0OL.jpg" , title: "Physics" , Price: 560},
        {image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSY7ih5VubabftlVi7jXLjlEUqRm7yIPAI8HOHxZblWtqMUm-w09Y9UQ3g1CsCB1hxkc69_B3n1c-3SdeXc-uFNbeYtV_aSOgX-CTPJ-VWl2-fmIINdndCFrw" , title: "Maths" , Price: 560},
        {image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRoc2eeL8FvUPzg-Ijd5B7-oYP62g3ItqBHEwjgW-KAJdmx4_9XrRwOICKr08FjrXbN-qFflHJD7gJijUvRanRlsQuReJ61YiJbOAdFAXD8p4HA9HV1b-s8" , title: "Chemistry" , Price: 560},
    ]

  return (
    <>
      <div>
        {/* <h1><center>Book Store</center></h1> */}
        < Header/><br></br>
        <div className = 'booklist'>
              {/* <Book/>
              <Book/>
              <Book/> */}
              {
            data.map((b, i) => (
              <Book key={i} book={b} />
            ))
          }
        </div>
      <Fotter/>
      </div>
    </>
  )
}

export default App
