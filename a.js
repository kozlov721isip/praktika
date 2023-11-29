"use strict";
/*
№1
let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	let p = document.createElement('p');
	p.textContent = elem;
	
	p.addEventListener('click', () => {
		elem += 1;
		p.textContent = elem;
	});
	
	parent.appendChild(p);
}
*/

/*
№2
// let arr = [1, 2, 3, 4, 5];
// let elem_ul=document.querySelector("#elem");
// for (let elem of arr){
//     let li = document.createElement("li");
//     li.textContent = elem;
//     elem_ul.appendChild(li)
// }
*/

/*
№3
// let arr = [1, 2, 3, 4, 5];
// let elem_ul=document.querySelector("#elem");
// for (let elem of arr){
//     let li = document.createElement("li");
//     li.textContent = elem;
//     li.addEventListener("click", function(){
//         alert(li.textContent)
//     })
//     elem_ul.appendChild(li)
// }
*/

/*
№4
let arr = [1, 2, 3, 4, 5];
let elem_ul=document.querySelector("#elem");
for (let elem of arr){
    let li = document.createElement("li");
    li.textContent = elem;
    li.addEventListener("click", function(){
        li.textContent+="!"
    })
    elem_ul.appendChild(li)
}
*/

/*
№5
// let arr = [1, 2, 3, 4, 5];
// let elem_ul=document.querySelector("#elem");
// for (let elem of arr){
//     let li = document.createElement("li");
//     li.textContent = elem;
//     li.addEventListener("click", function(){
//         li.textContent+="!"
//     }, {once:true})
//     elem_ul.appendChild(li)
// }
*/

/*
№6
// let table = document.querySelector('#table');

// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');

// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
*/

/*
№7
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
*/

/*
№8
// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent='x';
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
*/

/*
№9
// let str_input = document.querySelector("#str");
// let kol_input = document.querySelector("#kol");
// let button = document.querySelector("#otp");
// let table = document.querySelector('#table');
// button.addEventListener("click", function(){
//     for (let i = 0; i < str_input.value; i++) {
//         let tr = document.createElement('tr');
        
//         for (let i = 0; i < kol_input.value; i++) {
//             let td = document.createElement('td');
//             td.textContent='x';
//             tr.appendChild(td);
//         }
        
//         table.appendChild(tr);
//     }
// })
*/

/*
№10
// let table = document.querySelector('#table');

// let k = 1;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k;
// 		k++; 
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
*/

/*
№11
// let table = document.querySelector('#table');

// let k = 2;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
		
// 		td.textContent = k;
// 		k+=2; 
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }
*/

/*
№12
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr){
//     let tr = document.createElement("tr");
//     for (let subSubArr of subArr){
//         let td = document.createElement("td");
//         td.textContent=subSubArr;
//         tr.appendChild(td)
//     }
//     table.appendChild(tr);
// }
*/

/*
№13
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr){
//     let tr = document.createElement("tr");
//     for (let subSubArr of subArr){
//         let td = document.createElement("td");
//         td.textContent=subSubArr**2;
//         tr.appendChild(td)
//     }
//     table.appendChild(tr);
// }
*/

/*
№14
// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }
*/

/*
№15
// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener("click", function(){
//         td2.textContent = user.age++;
//     })

// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
    
// }
*/

/*
№16
// let table = document.querySelector('#table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener("click", function(){
//         td2.textContent = user.age++;
//     })

// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	td3.addEventListener("click", function(){
//         td3.textContent = (Number(td3.textContent)*10)/100;
//     })

// 	table.appendChild(tr);
    
// }
*/

/*
№17
// let table = document.querySelector('#table');
// let button = document.querySelector("button");
// button.addEventListener("click", function(){
//     let tr = document.createElement('tr');
//     tr.textContent="item"
//     table.appendChild(tr);
// })
*/

/*
№18
// let table2 = document.querySelector('#table2');
// let button = document.querySelector("button");
// button.addEventListener("click", function(){
// 	let trs = document.querySelectorAll('#table2 tr');
// 	let trr = document.createElement('tr');
// 	for (let tr of trs) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	for (let i=0; i<=trs.length; i++) {
// 		let td = document.createElement('td');
// 		trr.appendChild(td);
// 	}
// 	table2.appendChild(trr);
// })
*/

/*
№19
// let tds = document.querySelectorAll('#table td');
// let button = document.querySelector("button");
// button.addEventListener("click", function(){
// 	for (let td of tds){
// 		td.textContent = +td.textContent*2;
// 	}
// })
*/

/*
№20
// let button = document.querySelector("#button");
// let ul_par = document.querySelector("#parent");
// let i=0;
// button.addEventListener("click", function(){
// 	let li = document.createElement("li");
// 	i++;
// 	li.textContent = `newItem ${i}`;
// 	ul_par.appendChild(li);
// })
// ul_par.addEventListener("click", function(event){
// 	event.target.remove();
// })
*/

/*
№21
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault();
// });
*/

/*
№22
// let lis = document.querySelectorAll("#parent li");

// for (let li of lis) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	li.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		li.remove();
// 		event.preventDefault();
// 	});
// }
*/

/*
№23
// let table = document.querySelector("#table");
// let trs= document.querySelectorAll("#table tr")
// for (let tr of trs) {
// 	let td = document.createElement('td');
// 	let remove = document.createElement("a");
// 	remove.href = '';
// 	remove.textContent = "remove";
// 	tr.appendChild(td);
// 	td.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		tr.remove();
// 		event.preventDefault();
// 	});
// }
*/

/*
№24
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent;

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });
*/

/*
№25
// let elem2 = document.querySelector("#parent2");
// elem2.addEventListener("click", function(){
// 	let input2= document.createElement("input");
// 	input2.value=elem2.textContent;
// 	input2.addEventListener("blur", function(){
// 		elem2.textContent=this.value;
// 		this.remove();
// 	})
// 	elem2.parentElement.appendChild(input2)
// })
*/

/*
№26
// let elem2 = document.querySelector('#elem2');

// elem2.addEventListener('click', function func() {
// 	let input2 = document.createElement('input');
// 	input2.value = elem2.textContent;
// 	elem2.textContent = ''; 
// 	elem2.appendChild(input2);
// 	input2.addEventListener('blur', function() {
// 		elem2.textContent = this.value;
// 		elem2.addEventListener('click', func);
// 	});
// 	elem2.removeEventListener('click', func);
// });
*/

/*
№27
// let lis = document.querySelectorAll('#parent li');

// for (let li of lis) {
// 	li.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			li.textContent = this.value;
// 			li.addEventListener('click', func);
// 		});
		
// 		li.removeEventListener('click', func);
// 	});
// }
*/

/*
№28
// let tds = document.querySelectorAll("#table td");
// for (let td of tds){
// 	td.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		input.value = td.textContent;
// 		td.textContent="";
// 		td.appendChild(input);
// 		input.addEventListener("blur", function(){
// 			td.textContent = this.value;
// 			td.addEventListener("click", func)
// 		})
// 		td.removeEventListener("click", func);
// 	})
// }
*/

/*
№29
// let spans = document.querySelectorAll("#parent p span");
// for (let span of spans){
// 	span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		let remove= document.createElement("a");
// 		remove.textContent = "remove";
// 		span.parentElement.appendChild(remove);
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func)
// 		})
// 		span.removeEventListener("click", func);
// 	    remove.addEventListener('click', function(event) {
// 			span.parentElement.remove();
// 			event.preventDefault();
// 	});
// 	})
// }
*/

/*
№30
// let ps = document.querySelectorAll("#parent2 p");
// for(let p of ps){
// 	p.outerHTML = "<p>"+"<span>"+p.innerHTML+"</span>"+"</p>";
// }
// let spans = document.querySelectorAll("#parent2 p span")
// for (let span of spans){
// 	span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		let remove= document.createElement("a");
// 		remove.textContent = "remove";
// 		span.parentElement.appendChild(remove);
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func)
// 		})
// 		span.removeEventListener("click", func);
// 	    remove.addEventListener('click', function(event) {
// 			span.parentElement.remove();
// 			event.preventDefault();
// 	});
// 	})
// }
*/

/*
№31
// let ps = document.querySelectorAll("p");
// for (let p of ps) {
// 	p.innerHTML = '<span>' + p.innerHTML + '</span>';
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'link';
// 	p.appendChild(link);
// 	let spans = document.querySelectorAll('span')
//     for (let span of spans) {
// 	link.addEventListener('click', function(event) {
// 	    span.classList.add('t-d');
// 	    event.preventDefault();
// 	})
// }
// }
*/

/*
№32
// let ps = document.querySelectorAll("p");
// for (let p of ps) {
// 	p.innerHTML = '<span>' + p.innerHTML + '</span>';
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'link';
// 	p.appendChild(link);
// 	let spans = document.querySelectorAll('span')
//     for (let span of spans) {
// 	link.addEventListener('click', function(event) {
// 	    span.classList.add('t-d');
// 	    event.preventDefault();
// 		link.remove()
// 	})
// }
// }
*/

/*
№33
// let table = document.querySelector("#table");
// let trs= document.querySelectorAll("#table tr")
// for (let tr of trs) {
// 	let td = document.createElement('td');
// 	let background = document.createElement("a");
// 	background.href = '';
// 	background.textContent = "background green";
// 	tr.appendChild(td);
// 	td.appendChild(background);
// 	background.addEventListener('click', function(event) {
// 		tr.classList.add("fon-green");
// 		event.preventDefault();
// 	});
// }
*/

/*
№34
// let table = document.querySelector("#table");
// let trs= document.querySelectorAll("#table tr")
// for (let tr of trs) {
// 	let td = document.createElement('td');
// 	let background = document.createElement("a");
// 	background.href = '';
// 	background.textContent = "background green";
// 	tr.appendChild(td);
// 	td.appendChild(background);
// 	background.addEventListener('click', function(event) {
// 		tr.classList.toggle("fon-green");
// 		event.preventDefault();
// 	});
// }
*/

/*
№35
// let elem = document.querySelector('#elem');
// let hide = document.querySelector('#hide');
// hide.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// });
*/

/*
№36
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }
*/

/*
№37
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }
*/

/*
№38
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }
*/

/*
№39
// let lis = document.querySelectorAll("#elem li");
// for(let li of lis){
// 	li.addEventListener("click", function(){
// 		this.classList.add("active");
// 	})
// }
*/

/*
№40
// let lis = document.querySelectorAll("#elem li");
// for(let li of lis){
// 	li.addEventListener("click", function(){
// 		this.classList.toggle("active");
// 	})
// }
*/

/*
№41
// let tds = document.querySelectorAll('#table td');

// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.add(color);
// 	});
// }
*/

/*
№42
// let arr = [1, 2, 3, 4, 5];
// let elem_ul=document.querySelector("#elem");
// for (let elem of arr){
//     let li = document.createElement("li");
//     li.textContent = elem;
//     elem_ul.appendChild(li)
// }
*/

/*
№43
// let lis = document.querySelectorAll('#parent li');

// for (let li of lis) {
// 	li.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			li.textContent = this.value;
// 			li.addEventListener('click', func);
// 		});
		
// 		li.removeEventListener('click', func);
// 	});
// }
*/

/*
№44
// let button = document.querySelector("#button");
// let ul_par = document.querySelector("#parent");
// let i=0;
// button.addEventListener("click", function(){
// 	let li = document.createElement("li");
// 	i++;
// 	li.textContent = `newItem ${i}`;
// 	ul_par.appendChild(li);
// })
// ul_par.addEventListener('click', function func(event) {
// 	let input = document.createElement('input');
// 	input.value = event.target.textContent;
// 	event.target.textContent = '';
// 	event.target.appendChild(input);	
// 	input.addEventListener('blur', function() {
// 		event.target.textContent = this.value;
// 		event.target.addEventListener('click', func);
// 	});
		
// 		event.target.removeEventListener('click', func);
// });
*/

/*
№45
// let parent =document.querySelector("#parent")
// let lis=document.querySelectorAll("#parent li")
// for(let li of lis){
// 	li.outerHTML = "<li>"+"<span>"+li.innerHTML+"</span>"+"</li>";
// }
// let spans = document.querySelectorAll("#parent li span")
// function zadach(span){
// 	span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func);
// 		})
// 	    span.removeEventListener("click", func);
// 	})
// }
// function zadachRem(span){
// 	let remove= document.createElement("a");
// 	remove.textContent = "remove";
// 	span.parentElement.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		span.parentElement.remove();
// 		event.preventDefault();
//     });
// }
// for (let span of spans){
// 	zadach(span);
// 	zadachRem(span);
// }

// const but2 = document.querySelector("#button")
// but2.addEventListener('click', function (event) {
// 	let li = document.createElement('li');
// 	let span = document.createElement("span");
// 	span.textContent = "new element";
// 	li.append(span);
// 	parent.append(li);
// 	zadach(li.firstElementChild);
// 	zadachRem(li.firstElementChild)
// })
*/

/*
№46
// let parent =document.querySelector("#parent")
// let lis=document.querySelectorAll("#parent li")
// for(let li of lis){
// 	li.outerHTML = "<li>"+"<span>"+li.innerHTML+"</span>"+"</li>";
// }
// let spans = document.querySelectorAll("#parent li span")
// function zadach(span){
// 	span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func);
// 		})
// 	    span.removeEventListener("click", func);
// 	})
// }
// function zadachPerecherk(span){
// 	let link = document.createElement('a');
// 	link.href = '#';
// 	link.textContent = 'link';
// 	span.parentElement.appendChild(link);
// 	link.addEventListener('click', function(event) {
// 	    span.classList.toggle('t-d');
// 	    event.preventDefault();
// 	})
// }
// function zadachRem(span){
// 	let remove= document.createElement("a");
// 	remove.textContent = "remove";
// 	span.parentElement.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		span.parentElement.remove();
// 		event.preventDefault();
//     });
// }
// for (let span of spans){
// 	zadach(span);
// 	zadachRem(span);
// 	zadachPerecherk(span);
// }

// const but2 = document.querySelector("#button")
// but2.addEventListener('click', function (event) {
// 	let li = document.createElement('li');
// 	let span = document.createElement("span");
// 	span.textContent = "new element";
// 	li.append(span);
// 	parent.append(li);
// 	zadach(li.firstElementChild);
// 	zadachRem(li.firstElementChild);
// 	zadachPerecherk(li.firstElementChild)
// })
*/

/*
№47
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('#table');

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }
*/

/*
№48
// let table = document.querySelector('#table');
// let tds = document.querySelectorAll("#table td")
// for (let td of tds){
// 	td.addEventListener("click", function func(){
// 	  let input = document.createElement("input");
// 		input.value = td.textContent;
// 		td.textContent="";
// 		td.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			td.textContent = this.value;
// 			td.addEventListener("click", func);
// 		})
// 		td.removeEventListener("click", func);
// })}
*/

/*
№49
// let table = document.querySelector('#table');
// let trs = document.querySelectorAll("#table tr")
// let tds = document.querySelectorAll("#table td")
// for (let td of tds){
// 	td.addEventListener("click", function func(){
// 	    let input = document.createElement("input");
// 		input.value = td.textContent;
// 		td.textContent="";
// 		td.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			td.textContent = this.value;
// 			td.addEventListener("click", func);
// 		})
// 		td.removeEventListener("click", func);
//     })
// }
// for(let tr of trs){
// 	let remove= document.createElement("a");
// 	remove.textContent = "remove";
// 	tr.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		tr.remove();
// 		event.preventDefault();
//     });
// }
*/

/*
№50
// let inputName = document.querySelector('#nameInput');
// let inputAge = document.querySelector('#ageInput');
// let inputSalary = document.querySelector('#salaryInput');
// let addButton = document.querySelector('#addButton');
// let table = document.querySelector("#workersTable");
// let body = document.querySelector("body")
// function red(td){
// 	td.addEventListener("click", function func(){
// 	  let input = document.createElement("input");
// 		input.value = td.textContent;
// 		td.textContent="";
// 		td.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			td.textContent = this.value;
// 			td.addEventListener("click", func);
// 		})
//   		td.removeEventListener("click", func);
// })}
// addButton.addEventListener('click', function() {
//   let name = inputName.value;
//   let age = inputAge.value;
//   let salary = inputSalary.value;

// 	let tr = document.createElement('tr');

// 	let tdName = document.createElement('td');
// 	tdName.textContent = name;
// 	tr.appendChild(tdName);
//   red(tdName);

// 	let tdAge = document.createElement('td');
// 	tdAge.textContent = age;
// 	tr.appendChild(tdAge);
//   red(tdAge);

// 	let tdSalary = document.createElement('td');
// 	tdSalary.textContent = salary;
// 	tr.appendChild(tdSalary);
//   red(tdSalary);

// 	let tdRemove = document.createElement('td');
// 	let remove = document.createElement('a');
// 	remove.textContent = ' remove';
// 	remove.onclick = () => {
// 		table.removeChild(tr);
// 	}
// 	tdRemove.appendChild(remove);
// 	tr.appendChild(tdRemove);

// 	table.appendChild(tr);

// 	inputName.value = '';
// 	inputAge.value = '';
// 	inputSalary.value = '';
// });

// body.appendChild(inputName);
// body.appendChild(inputAge);
// body.appendChild(inputSalary);
// body.appendChild(addButton);
*/

/*
№51
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector("#elem");
// for (let user of employees) {
// 	let li1 = document.createElement('li');
// 	li1.textContent = user.name;
// 	ul.appendChild(li1);
// }
*/

/*
№52
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// function red(li){
//   li.addEventListener("click", function func(){
//     let input = document.createElement("input");
//     input.value = li.textContent;
//     li.textContent="";
//     li.appendChild(input);
//     input.focus();
//     input.addEventListener("blur", function(){
//     	li.textContent = this.value;
//     	li.addEventListener("click", func);
//     })
//       li.removeEventListener("click", func);
//     })
// }
// for (let user of employees) {
//   let ul = document.querySelector("#elem");
// 	let li1 = document.createElement('li');
// 	li1.textContent = user.name;
// 	ul.appendChild(li1);
//   red(li1);

// 	let li2 = document.createElement('li');
// 	li2.textContent = user.age;
// 	ul.appendChild(li2);
//   red(li2);

//   let li3 = document.createElement('li');
// 	li3.textContent = user.salary;
// 	ul.appendChild(li3);
//   red(li3);
// }
*/

/*
№53
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector("#elem");

// for (let user of employees) {
// 	let li = document.createElement('li');
// 	li.innerHTML =`<span> ${user.name} ${user.age} ${user.salary} </span>`;
// 	ul.appendChild(li);
//   let remove = document.createElement('a');
// 	remove.textContent = ' remove';
// 	remove.onclick = () => {
// 		li.remove();
// 	}
// 	li.appendChild(remove);
// }
// let spans=document.querySelectorAll("#elem li span");
// for (let span of spans){
//   	span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func);
// 		})
// 	    span.removeEventListener("click", func);
// 	})
// }
*/

/*
№54
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector("#elem");
// function rem(li){
//   let remove = document.createElement('a');
// 	remove.textContent = ' remove';
// 	remove.onclick = () => {
// 		li.remove();
// 	}
// 	li.appendChild(remove);
// }
// function red(span){
//   span.addEventListener("click", function func(){
// 		let input = document.createElement("input");
// 		input.value = span.textContent;
// 		span.textContent="";
// 		span.appendChild(input);
// 		input.focus();
// 		input.addEventListener("blur", function(){
// 			span.textContent = this.value;
// 			span.addEventListener("click", func);
// 		})
// 	    span.removeEventListener("click", func);
// 	})
// }
// for (let user of employees) {
// 	let li = document.createElement('li');
// 	li.innerHTML =`<span> ${user.name} ${user.age} ${user.salary} </span>`;
// 	ul.appendChild(li);
//   rem(li);
// }
// let spans=document.querySelectorAll("#elem li span");
// for (let span of spans){
//   	red(span);
// }

// const but2 = document.querySelector("#button")
// but2.addEventListener('click', function (event) {
// 	let li = document.createElement('li');
// 	let span = document.createElement("span");
// 	span.textContent = "new element";
// 	li.append(span);
// 	ul.append(li);
//   rem(li)
//   red(span)
// })
*/













































































































































































