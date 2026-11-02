const todoList = [{
  name: 'Coding', 
  dueDate: '2026-08-19'
}, {
  name: 'Making Breakfast',
  dueDate: '2026-08-12'
}];
renderTodoListHTML();


function renderTodoListHTML() {
  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name} </div>
      <div>${dueDate}</div>
         
      <button class="todo-delete-button" onclick="
          todoList.splice(${i}, 1);
          renderTodoListHTML();
      ">Delete</button>
    `;
    todoHTML += html;
    document.querySelector('.js-todo-list').innerHTML = todoHTML;

  }

};

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const name = inputElement.value.trim();
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });

  renderTodoListHTML();

  inputElement.value = '';
  dateInputElement.value ='';

};