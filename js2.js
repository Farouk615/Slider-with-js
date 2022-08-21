var photos = document.querySelectorAll('.slider-container img')
var photosArray = Array.from(photos)

var lengthArray = photosArray.length


var itemsUl = document.createElement('ul')
itemsUl.setAttribute('id','paginaUl')

for(let i=0;i<lengthArray;i++){
    let bullet = document.createElement('li');
    bullet.setAttribute('id',i+1)
   itemsUl.appendChild(bullet);
   bullet.appendChild(document.createTextNode(i+1))
   
}
var indicators = document.getElementById('indicators')
indicators.appendChild(itemsUl)

var numbers = document.querySelectorAll('#paginaUl li')
var numbersArray = Array.from(numbers)
var currentItem = 1;
var sliderInfo = document.getElementById('slide-number')
next = document.getElementById('next')
prev = document.getElementById('prev')

next.onclick = nextItem ;
prev.onclick = prevItem ;

theChecker()






function nextItem(){
    currentItem++;
    theChecker();
}
function prevItem(){
    currentItem--;
    theChecker();
}

function theChecker(){
    sliderInfo.textContent='Slide # '+currentItem+ ' of '+lengthArray
    removeActive();
    let item = photosArray[currentItem-1];
    item.classList.add('active')
    let bullet = document.getElementById(currentItem)
    bullet.classList.add('active') 
    if(currentItem == lengthArray){
        next.classList.add('disabled')
        next.setAttribute('disabled','true')
    }else{
        next.classList.remove('disabled')
        next.removeAttribute('disabled','false')
    }
    if(currentItem == 1){
        prev.classList.add('disabled')
        prev.setAttribute('disabled','true')
    }else{
        prev.classList.remove('disabled')
        prev.removeAttribute('disabled','false')
    } 
}

function removeActive(){
    photosArray.forEach(element => {
        element.classList.remove('active')
    });
    numbersArray.forEach(element => {
        element.classList.remove('active')
    });
}