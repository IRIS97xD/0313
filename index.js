console.log('contected');

// 요소 선택

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('athers'));

console.log(document.getElementsByTagName('div'));

console.log(document.getElementsByName('id'));

console.log(document.querySelector('.pink'));
console.log(document.querySelector('#green'));

console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('input'));

const pinks = document.querySelectorAll('.pink');
console.log(pinks);

for(let pink of pinks) {
    console.log(pink);
}