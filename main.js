window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})
})

let form = document.querySelector("form");
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inpData = form[0].value;
    todo.push(inpData)
    localStorage.setItem('todo', JSON.stringify(todo))
    location.reload()
})
todo.map((data, index) => {
    document.querySelector("tbody").innerHTML += `
    <tr>
    <td>${data}</td>    
    <td onclick="del(${index})">Delete</td>    
    </tr>
    `;
})

function del(e) {
    let deleted = todo.filter((data, index) => {
        return index !== e;
    })
    localStorage.setItem('todo', JSON.stringify(deleted))
    location.reload()
}

