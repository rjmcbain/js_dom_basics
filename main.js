// Examine The Document Object 

// console.log("Hello World!");
// console.log("Document: ", document);
// console.log("URL: ", document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors

// getElementById
// console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
headerTitle.textContent = 'Hello'; // Doesnt pay attention to styling
headerTitle.innerText = "GoodBye";
headerTitle.innerHTML = "Hello World!";
headerTitle.innerHTML = "<h3>Hello Again!</h3>";
headerTitle.style.color = 'red';
header.style.borderBottom = 'solid 3px #000';

// getElementsByClassName
const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
items[1].innerHTML = "Hello 2";
items[1].style.fontWeight = 'bold';

for(i=0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
  // console.log(i);
}
items[1].style.backgroundColor = 'yellow';

//getElementsByTagName
const li = document.getElementsByTagName('li');
li[3].innerHTML = "Hello 4";
// console.log(li);
for(i=0; i < li.length; i++) {
  li[i].style.borderBottom = 'solid 2px #000';
  // li[i].style.backgroundColor = '#f4f4f4';
}

//QuerySelector

const title = document.querySelector('#main-header');
title.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input');
input.value = "Hello World!!";
console.log(input.value);

const button = document.querySelector('.btn-dark');
button.value = 'SEND';


document.addEventListener("click", buttons);

function buttons(e) {
  e.preventDefault();
  console.log(input.value);
}

const item = document.querySelector('.list-group-item');
item.style.color = 'red'; // Changes first item

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'purple'; // Changes last item

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; // Changes last item

// Query Selector All

const titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].innerHTML = 'Changing These Items';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

for(i=0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}