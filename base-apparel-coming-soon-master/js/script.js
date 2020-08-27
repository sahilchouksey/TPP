document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      checkMail();
    }
  });

document.querySelector('.btn').addEventListener('click', checkMail);

let queries = new Map();
queries.set('icon', document.querySelector('img.icon-error'));
queries.set('span-error', document.querySelector('span.error'));

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
let mailV = document.getElementById('email');

function checkMail() {
    if (mailV.value && mailV.value.match(mailformat)) {
        queries.get('icon').classList.remove('active');
        queries.get('span-error').classList.remove('active');
        queries.get('span-error').innerHTML = '';
            alert(`We will notify you!!!`);
            mailV.value = '';
    } else {
        queries.get('icon').classList.add('active')
        queries.get('span-error').classList.add('active')
        if (mailV.value === "") {queries.get('span-error').innerHTML = 'Please provide a email'}
        else {queries.get('span-error').innerHTML = 'Please provide a valid email'}
    } 
}
