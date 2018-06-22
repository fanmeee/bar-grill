const form = document.forms.namedItem('add-todo');
const todosList = document.getElementById('todos');

form.addEventListener (
'submit',
(event) =>
{
  event.preventDefault();
  const input=form.elements.namedItem('text');
  const newItem = document.createElement( 'li' );
  newItem.textContent = input.value; 
  /** newItem.innerHTML = */
  todosList.appendChild( newItem );
  /** todoList.insertBefore( newItem, todoList.firstChild ); добавить в начало - перед 1 элементом*/
  input.value = '';
}
);

todosList.addEventListener(
'click',
  (event) =>
  {
    const item = event.target;
    if (item.tagName !=='LI')
      {
        return;
      }
    todosList.removeChild(item);
  }
  
  
);