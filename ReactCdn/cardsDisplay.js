function BookCard({ title, price, image }) {
  const cardStyle = {
    background: "white",
    borderRadius: "10px",
    padding: "15px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    margin: "10px",
  };

  const imgStyle = {
    width: "100%",
    height: "210px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const priceStyle = {
    color: "#007bff",
    fontWeight: "600",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={priceStyle}>₹{price}</div>
    </div>
  );
}

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    alignItems: "center",
  };

  const books = [
    {
      title: "The Alchemist",
      price: 399,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      title: "Atomic Habits",
      price: 499,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      price: 299,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
  ];

  return (
    <div style={containerStyle}>
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          price={book.price}
          image={book.image}
        />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
