// // Create image box
// const imgBox = React.createElement(
//   'div',
//   { className: 'imgBox' },
//   React.createElement('img', {
//     src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     alt: 'Scenery'
//   })
// );

// // Create content box
// const content = React.createElement(
//   'div',
//   { className: 'content' },
//   React.createElement('h2', null, 'Card Title'),
//   React.createElement(
//     'p',
//     null,
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
//   ),
//   React.createElement('h4', null, 'Price: $350')
// );

// // Create card element
// const card = React.createElement('div', { className: 'card' }, imgBox, content);

// // Create parent container
// const parent = React.createElement('div', { className: 'parent' }, card);

// // Create main container with heading and card
// const container = React.createElement(
//   'div',
//   null,
//   React.createElement('h1', null, 'Environment Scenery'),
//   parent
// );

// // Render to root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);
 
// Using function 
// function Card(props) {
//   return (
//     React.createElement('div', { className: 'card' },
//       React.createElement('div', { className: 'imgBox' },
//         React.createElement('img', { src: props.image, alt: props.title })
//       ),
//       React.createElement('div', { className: 'content' },
//         React.createElement('h2', null, props.title),
//         React.createElement('p', null, props.description),
//         React.createElement('h4', null, `Price: $${props.price}`)
//       )
//     )
//   );
// }

// function App() {
//   return (
//     React.createElement('div', { className: 'parent' },
//       React.createElement('h1', null, 'Environment Scenery'),
//       React.createElement(Card, {
//         title: 'Beautiful Mountain View',
//         description: 'Experience the tranquility of nature with this scenic landscape.',
//         price: 350,
//         image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
//       })
//     )
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement(App));

//For multiple cards using function and array
function Card(props) {
  return (
    React.createElement('div', { className: 'card' },
      React.createElement('div', { className: 'imgBox' },
        React.createElement('img', { src: props.image, alt: props.title })
      ),
      React.createElement('div', { className: 'content' },
        React.createElement('h2', null, props.title),
        React.createElement('p', null, props.description),
        React.createElement('h4', null, `Price: $${props.price}`)
      )
    )
  );
}

function App() {
  const cardsData = [
    {
      title: 'Beautiful Mountain View',
      description: 'Experience the tranquility of nature with this scenic landscape.',
      price: 350,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Peaceful River',
      description: 'Relax by the flowing water and feel the calm breeze.',
      price: 420,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Green Valley',
      description: 'Enjoy the lush greenery and vibrant nature.',
      price: 300,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1170&q=80'
    }
  ];

 
  const cardElements = cardsData.map((item, index) =>
    React.createElement(Card, { key: index, ...item })
  );

  return (
    React.createElement('div', { className: 'parent' },
      React.createElement('h1', null, 'Environment Scenery'),
      ...cardElements 
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
