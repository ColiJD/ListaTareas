const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
 };

 const completeTask = (event) => {
    const elemnt = event.target;
    elemnt.classList.toggle('fas', 'completeIcon', 'far');
    elemnt.classList.toggle('completeIcon');
    elemnt.classList.toggle('far');
 };

 export default checkComplete;

