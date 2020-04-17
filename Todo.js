var listElements = document.querySelector('ul')
var inputElements = document.querySelector('#app input')
var buttonElements = document.querySelector('#app button')

var Todos = JSON.parse(localStorage.getItem('list_todos'));

function renderTodos() {
    listElements.innerHTML = '';

    for (todo of Todos) {

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href' , '#');

        var pos = Todos.indexOf(todo);
        linkElement.setAttribute('onclick' , 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
         
        listElements.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var text = inputElements.value;
    Todos.push(text);

    inputElements.value = '';
    renderTodos();
    saveStorage();

}

buttonElements.onclick = addTodo;

function deleteTodo(pos) {
    Todos.splice(pos , 1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(Todos))
}
