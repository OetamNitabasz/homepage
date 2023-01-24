console.log ("Wow widzę, że zaglądasz do konsoli w chromie brawo ty!");
const name = 'Mateusz Szabatin';
const age = 20;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong>Nazywam</strong> się ${name} i mam ${age} lat`;

const paragpraphs = document.querySelectorAll('p');

console.log(paragpraphs);
console.log(paragpraphs[1]);