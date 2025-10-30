//Functional component 
import ReactDOM from 'react-dom';
function book({book}){
    return (
        <div className = "card">
            <img src={book.image} alt="Book Cover" width="400"/>
            <h3>Title:{book.title}</h3>
            <h4>Price:{book.price}</h4>
        </div>
    )
}
const b = {image:"https://m.media-amazon.com/images/I/51N-u8AsmdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg", title:"Atomic Habits", price:"₹799"};
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<Book book={b}/>);