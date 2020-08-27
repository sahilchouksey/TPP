(function () {
  const elements = {
  filtertext: document.querySelector('.filter-tab-content'),
  clearBtn: document.querySelector('.clear')
}

// VIEW
const buttons = Array.from(document.querySelectorAll('button'));
const hideAll = () => buttons.forEach(g => {           
  g.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("hide");
})
let clickedButtons = []

function disText() {
  let x = []
  if (clickedButtons.length>0) {
     let markUp;
     elements.clearBtn.style.margin = '28px'
     clickedButtons.forEach((e, i)=> {

    if(!document.querySelector(`.l-${i}`)) markUp = `<li><span class='filter-item-tab l-${i}'>${e}</span>`
  })


  if(markUp) elements.filtertext.insertAdjacentHTML('beforeend', markUp)
}
}

elements.clearBtn.addEventListener('click', e=> {
  elements.clearBtn.style.margin = '10px'
  buttons.forEach(g => {           
    g.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove("hide");
  })
  clickedButtons = []
  elements.filtertext.innerHTML=''
  disText()
  if (clickedButtons.length === 0) elements.filtertext.innerHTML ='No filters applied...'
})


// GLOBAL
let jobsReq = Array.from(document.querySelectorAll('.company-div'));
let btnsParData= [];
let n =[]
let pub =[]
jobsReq.forEach((e, i) => { 
 e.classList.add(`job-${i}`);
 e = e.lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText.toLowerCase();
 e = e.split(' ')
 btnsParData.push(e)
})

buttons.forEach((g, i) => {
   
  g.addEventListener( 'click', e => {

    if (elements.filtertext.innerText === 'No filters applied...') elements.filtertext.innerHTML =''
    else if (clickedButtons.length === 0) elements.filtertext.innerHTML ='No filters applied...'
    let indexOfRepeatedBtn = findAllIndexOf(clickedButtons, g.innerText.toLowerCase())
    if (indexOfRepeatedBtn.length < 1 ) clickedButtons.push(g.innerText.toLowerCase());

    let s=[]
    if (clickedButtons.length > 0) {
      for (let i = 0; i < btnsParData.length; i++) {
      s.push(indexf(btnsParData[i]))
      n=[]
    }
    }

    pub=[]
    s.forEach((e,i)=> {
      pub.push(e.reduce( combineAr))
    })

    disjob(pub)
    disText()

  })

})

function disjob(global) {
  let x = [];
  let allDJobs = [];
  hideAll()
  global.forEach((f, i)=> {
   if (f.length === clickedButtons.length) x[i] = i
  })
  
  x.forEach((e, i) => {
    allDJobs.push(Array.from(document.querySelectorAll(`.job-${i}`)))
   
  })
  
  
  for (let i=0; i<allDJobs.length; i++) {
  allDJobs[i].forEach((e, i) => {
    
    e.classList.remove("hide")
    
  })
  }
}

function combineAr(prev, cur) {
    return [].concat(prev, cur);
}

function indexf(e) {
  clickedButtons.forEach((x, i) => {
    n.push(findAllIndexOf(e, x))
  })
    return n
}

function findAllIndexOf(target, needle) {
    return [].concat(...(function*(){
      for (let i = 0; i < target.length; i++) if (target[i] === needle) yield [i];
    })());
  }
})();
