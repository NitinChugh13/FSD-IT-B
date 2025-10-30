const child = document.createElement('div');
child.classList.add('card');

const imgBox = document.createElement('div');
imgBox.classList.add('imgBox');

const img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
imgBox.appendChild(img);

const content = document.createElement('div');
content.classList.add('content');

const h2 = document.createElement('h2');
h2.textContent = 'Card Title';

const p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';

const h4 = document.createElement('h4');
h4.textContent = 'Price: $350';

content.appendChild(h2);
content.appendChild(p);
content.appendChild(h4);

child.appendChild(imgBox);
child.appendChild(content);

const parent = document.getElementById('root');
parent.appendChild(child);




