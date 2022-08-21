// Get the slider items | array.from (ES6 feature)
var sliderItems = Array.from(document.querySelectorAll('.slider-container img')) ;

// get number of slides
var length = sliderItems.length;

 // set current slide
 var currentSlideNumber=1;

 // get slide number 
 var sliderNumber = document.getElementById('slide-number')

 // prev and next buttons
  var prev = document.getElementById('prev')
  var next = document.getElementById('next')

 // handling click button 
  next.onclick=nextImage;

function nextImage(){
    currentSlideNumber++,
    theChecker();
}

prev.onclick = prevItem;

function prevItem(){
    currentSlideNumber--;
    theChecker();
}

// create the ul element

var paginaUl = document.createElement("ul");

// set Id on created element

paginaUl.setAttribute('id','paginUl')

// create li based on slider elements

for(let i=1;i<=length;i++){
    // create li
    var paginaLi = document.createElement("li");
    paginaLi.setAttribute('data-index',i)

    // set item content
    paginaLi.appendChild(document.createTextNode(i))

    // append li to ul
    paginaUl.appendChild(paginaLi)
}

var indicators = document.getElementById('indicators')
indicators.appendChild(paginaUl)

// Get the slider bullets | array.from (ES6 feature)
var sliderBullets = Array.from(document.querySelectorAll('#paginUl li')) ;
sliderBullets.forEach(function(bullet){
    bullet.onclick = function(){
        currentSlideNumber = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
})

theChecker();
// Create the checker function
function theChecker(){
    sliderNumber.textContent = 'Slide #'+(currentSlideNumber)+' of '+(length);
    
    removeAllActiveClasses()
    // set active class on current slide
    sliderItems[currentSlideNumber-1].classList.add('active')
    
    

    // set active class on current pagination item

    paginaUl.children[currentSlideNumber-1].classList.add('active')
    
    // check if current slide is number 1 or the last one
    if(currentSlideNumber == 1){
        prev.classList.add('disabled')
        prev.setAttribute('disabled','true')
    }
    else{
        prev.classList.remove('disabled');
        prev.removeAttribute('disabled')
    }
    
    if(currentSlideNumber == length){
        next.classList.add('disabled')
        next.setAttribute('disabled','true')
    }
    else{
        next.classList.remove('disabled')
        next.removeAttribute('disabled','true')
    }
}

// remove All Active Classes From Img and bullets
function removeAllActiveClasses(){
    sliderItems.forEach(function(img){
        img.classList.remove('active');
    });
    sliderBullets.forEach(function(bullet){
        bullet.classList.remove('active')
    })
}