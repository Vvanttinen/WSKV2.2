// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function createListItem(task) {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = task.id;
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', (e) => {
    task.completed = e.target.checked;
    console.log(`Task ${task.id} completed: ${task.completed}`);
  })

  const label = document.createElement('label');
  label.htmlFor = task.id;
  label.textContent = task.task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
}

function main() {
  const list = document.querySelector("ul")

  todoList.forEach(task => {
    list.appendChild(createListItem(task));
  });

  const addButton = document.getElementById('addBtn');
  const input = document.getElementById('diaInput');
  const addDialog = document.getElementById("dialog");
  const addButtonDialog = document.getElementById("diaAddBtn");
  addButton.addEventListener('click', () => {
    addDialog.showModal();
    input.value = '';
  });
  addButtonDialog.addEventListener('click', (event) => {
    event.preventDefault(); // stop the site from refreshing
    const newTask = {
      id: todoList.length + 1,
      task: input.value,
      completed: false,
    };
    todoList.push(newTask);
    list.appendChild(createListItem(newTask));
    addDialog.close();
  })
}

main();
