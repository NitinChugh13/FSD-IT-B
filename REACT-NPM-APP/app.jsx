import Book from './Book.jsx';
import './app.css';
function App(){
    const bookjson=[{
        image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" , width:"200",
        title:"Atomic Habits",
        price:"₹799"
    },
    {
        image:"https://www.oskareggert.com/content/images/size/w2000/2023/04/IMG_1554.JPG",
        title:"The Psychology of Money",
        price:"₹599"        
    },
    {
        image:"https://m.media-amazon.com/images/I/41+eK8zBwQL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        title:"The Alchemist",
        price:"₹499"        
    }

    ]
    return (
        <div className ="app">
           {bookjson.map((b,i)=><Book key={i} book={b}/>)}
                
        </div>
    )
}

export default App;