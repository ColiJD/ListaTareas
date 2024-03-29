import checkComplete from "./componentes/checkComplete.js";
import deleteicon from "./componentes/deleteicon.js";

(() => {
   const btn = document.querySelector('[data-form-btn]');
   const createTask = (evento) => {
      evento.preventDefault();
      const input = document.querySelector('[data-form-input]');
      const value = input.value;
      const list = document.querySelector('[data-list]')
      const task = document.createElement('li')
      task.classList.add('card');
      input.value = "";
      //Backticks
      const taskContent = document.createElement('div');
      taskContent.appendChild(checkComplete());
      const titleTask = document.createElement('span');
      titleTask.classList.add('task');
      titleTask.innerHTML = value;;
      taskContent.appendChild(titleTask);
      //task.innerHTML = content;
      task.appendChild(taskContent);
      task.appendChild(deleteicon());
      list.appendChild(task);

   }

   //Listener
   btn.addEventListener('click', createTask);
})();