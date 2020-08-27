document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        checkInfo();
    }
  });

document.querySelector('.submit').addEventListener('click', checkInfo);

const queries = new Map();
queries.set('icon', Array.from(document.querySelectorAll('img.icon-error')));
queries.set('span-error', Array.from(document.querySelectorAll('span.error')));
queries.set('input-error', Array.from(document.querySelectorAll('input.info')));



const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
const text = document.querySelectorAll('.info');

function checkInfo(){
const info = Array.from(text)
const sponError = queries.get('span-error');
const icon = queries.get('icon');
const inputError = queries.get('input-error');
const [firstN, lastN, email, password] = [0, 1, 2, 3];
info.forEach((el, i) => {
    if (el.value !== "") {
            icon[i].classList.remove('active');
            sponError[i].classList.remove('active');
            inputError[i].classList.remove('active');
            sponError[i].innerHTML = '';
    } else {
        icon[i].classList.add('active');
        sponError[i].classList.add('active');
        inputError[i].classList.add('active');
        sponError[firstN].innerHTML = 'First Name cannot be empty';
        sponError[lastN].innerHTML = 'Last Name cannot be empty';
        const t = info[email].value.match(mailformat) ? false : true;
        if (info[email].value === "") {
            sponError[email].innerHTML = 'Email cannot be empty'
        } else if (t) {
            icon[email].classList.add('active');
            sponError[email].classList.add('active');
            inputError[email].classList.add('active');
            sponError[email].innerHTML = 'Looks like this is not an email';       
        }
        sponError[password].innerHTML = 'Password cannot be empty';
    }
})
}