// const ul = document.querySelector('ul');
// ul.firstElementChild.textContent = 'Hello';
// ul.lastElementChild.innerHTML = '<h5>HHHHH</h5>'

// const btn = document.querySelector('.sub_listener');
// btn.style.background = 'red';
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('form').style.background = '#fff';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.ul_item').lastElementChild.innerHTML = '<h1>Hello!</>';
// });
// btn.addEventListener('mouseout', (e) => {
//   e.preventDefault();
//   document.querySelector('form').style.background = '#fff';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.ul_item').lastElementChild.innerHTML = '<h1>Hello!</>';
// });
const myForm = document.querySelector('#my_form');
const firstNameInput = document.querySelector('#first_name');
const lastNameInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#exampleInputEmail1');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#list_group');

myForm.addEventListener('submit', onsubmit); 

function onsubmit(e){
  e.preventDefault();
  if(firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${firstNameInput.value} ${lastNameInput.value} ---> (email: ${emailInput.value})`));
    li.classList.add('list-group-item');
    userList.appendChild(li);
    //clear fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
  }
}