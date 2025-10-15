// function Book(){
//    const image = React.createElement("img",{
//         src :"https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//         width :"200px",
//         height :"300px",
//         alt : "The Alchemist"
//     },null);

//     const h3 = React.createElement("h3",null,"Title: The Alchemist");
//     const h4 = React.createElement("h4",null,"Price: ₹399");

//     const btn = React.createElement("button",{},"Add to Cart");

//     const child = React.createElement("div",{className:"card"},[image,h3,h4,btn]);

//     return child;// it does not return normal element 
// }
// // const parent = Document.getElementById("root");
// // const root = ReactDOM.createRoot(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(React.createElement(Book));// So here i have converted the child into element first .

function Book() {
        const image = React.createElement("img", {
          src: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
          width: "200px",
          height: "300px",
          alt: "The Alchemist",
        });

        const h3 = React.createElement("h3", null, "Title: The Alchemist");
        const h4 = React.createElement("h4", null, "Price: ₹399");
        const btn = React.createElement("button", null, "Add to Cart");

        
        return React.createElement("div", { className: "card" }, [image, h3, h4, btn]);
      }

      
      const root = ReactDOM.createRoot(document.querySelector("#root"));
      root.render(React.createElement(Book));