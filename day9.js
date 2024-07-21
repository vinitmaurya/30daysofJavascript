function changeHeadText(){
    document.getElementById('head').innerHTML = "Welcome to Nineth day in series";
}

function changeBg(){
    const elements = document.getElementsByClassName('info');
    for(var i=0;i<elements.length;i++){
        elements[i].style.background = 'red';
    }
}
function addDivElement(){
    var div = document.createElement("div");
    div.innerHTML = "kuch nahi";
    div.id = "imp";
    document.body.appendChild(div);
}
function addLiElement(){
    var ul = document.getElementsByTagName("ul");
    var li = document.createElement("li");
    li.innerText = "li added";
    for(var i=0;i<ul.length;i++){
        ul[i].appendChild(li)
    }
}
function removeAddedDiv(){
    let el = document.getElementById("imp");
    el.remove();
}
function deleteLastElement(){
    let ul = document.getElementById("unorderd");
    ul.removeChild(ul.lastElementChild);
}
function updateTextField(){
    let numField = document.getElementById("textField");
    numField.setAttribute("type", "number");
    numField.setAttribute("name", "num");
    numField.setAttribute("id", "numField");

}

function changeClassName(){
    let styleEl = document.getElementById("styleMe");
    if(styleEl.className == "redClass"){
        styleEl.classList.remove("redClass");
        styleEl.classList.add("blueClass");
    }else{
        styleEl.classList.remove("blueClass");
        styleEl.classList.add("redClass");
    }
    
}

function addClickEvent(){
    const btn = document.getElementById("changeMeButton");
    btn.addEventListener("click",changeParaWithDynamicClickEvent);
}
function changeParaWithDynamicClickEvent(){
    const para = document.querySelector(".changeMe");
    para.innerText = "Ha Haa Fooled Ya";
}

function addHoverEvent(){
    const span = document.querySelector(".hoverMe");
    span.addEventListener('mouseover',()=>{
        span.style.border = '5px solid red';
    })
    span.addEventListener('mouseout',()=>{
        span.style.border = 'none';
    })
}