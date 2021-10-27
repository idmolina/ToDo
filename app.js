const todos = [];

const get = (element)=> document.getElementById(element);

const pendingList = get("pendingList");
const completedList = get("completedList");
const addForm = get("addForm");
const newTodo = get("newTodo");

const cssClasses = {
  pending:"bg-white w-full text-center text-purple-600 rounded py-4 border-2 border-purple-500 transition transform ease-in-out duration-300 hover:bg-purple-500 hover:text-white hover:scale-110 hover:rotate-1 cursor-pointer",
  done:"bg-white w-full text-center text-blue-600 rounded py-4 border-2 border-blue-500 transition transform ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:-rotate-1 cursor-pointer",
};

const showTodos = () => {
  const pendingTodos = todos.filter((todo) => todo.status === "pending");

  pendingList.innerHTML = "";
  pendingTodos.forEach((todo) => {
    const pendingItem = document.createElement("li");
    pendingItem.className = cssClasses.pending;
    pendingItem.innerText = todo.text;
    pendingItem.id = todo.id;
    pendingList.appendChild(pendingItem);
  });

  const completedTodos = todos.filter((todo) => todo.status === "done");

  completedList.innerHTML = "";
  completedTodos.forEach((todo) => {
    const completedItem = document.createElement("li");
    completedItem.className = cssClasses.done;
    completedItem.innerText = todo.text;
    completedItem.id = todo.id;
    completedList.appendChild(completedItem);
  });
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: newTodo.value,
    status: "pending",
  });
  newTodo.value = "";
  showTodos();
});

pendingList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "done";
  showTodos();
});

completedList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "pending";
  showTodos();
});