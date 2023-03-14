const div1 = document.getElementById('div1');
console.log(div1);

div1.innerHTML = '여기는 <br>첫번째</br> 태그입니다. &heart;'
console.log(div1.innerHTML);

div1.innerText = '여기는 <br>첫번째</br> 태그입니다.        &heart;'
console.log(div1.innerText);
div1.textContent = '여기는 <br>첫번째</br> 태그입니다.       &heart;'
console.log(div1.textContent);

// innderText , textContent = 태그가 그대로 보임

// textContent
// 공백문자 그대로 반환
// IP9 이전 호환 x

// innderText
// 공백문자 제거

const naver = getElementById('naver')

naver.setAttribute('href', 'https://www.google.com');
console.log(document.getElementById('img1') .getAttribute('src'));

console.log(document.getElementById('img1').src);

naver.href = '#';

// CSS 지정

const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li');

console.log(h1);
console.log(list);

list[0].style.backgroundColor = 'blue';
for(let li of list) {
    li.style.backgroundColor = 'yellow';
    li.style.color = 'ghostwhite';    
}

console.log(h1.classList);
h1.classList.add('add h1');
// add 클래스 추가
// remove 클래스 제거
// contain 있는지 없는지 확인 있으면 T 없으면 F
// toggle 있다면 제거 없으면 추가

// 노드 찾기
const friends = document.querySelector('#freinds');
const tigger = document.querySelectorO('#tigger');
console.log(friends);
console.log(tigger);

console.log('==자식 노드');
console.log(friends.children);
console.log(friends.children(0));

// 요소 생성, 추가, 삭제

const containor = document.querySelector('.containor');
console.log(containor);

const p = document.createElement('p');
p.innerText = "새로 추가된 p";
p.style.fontWeight = "700";
p.style.backgroundColor = "red";

const p2 = document.createElement('p');
const p3 = document.createElement('p');
p2.innerHTML = 'p2';
p3.textContent = 'p3';
p2.classList.add('p-2');
p3.classList.add('p-3');

containor.append(p3, p2);

const li1 = document.createElement('li');
li1.textContent = '킹가'
friends.prepend(li1);

// before & after
// bofore : 선택 요소의 앞으로 추가
// after : 선택 요소의 뒤로 추가

const h3 = document.createElement('h3');
h3.innerHTML = 'h3';
h1.after(h3);

const h2 = document.createElement('h2');
h2.innerHTML = 'h2';
h1.before(h2);

// 요소 삭제 remove, removeChild
const firstli = document.querySelector('li');
console.log(firstli);
const ul = firstli.parentNode;
console.log(ul)

// firstli.remove();
ul.removeChild(firstli);

const img = document.createElement('img')
img.setAttribute('src', '../0311/amazing_nature-wallpaper-1280x800');
img.style.width = "200px";
img.style.height = "120px";
