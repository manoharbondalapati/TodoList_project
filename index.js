
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



function addElement() {
    var li = document.createElement("li");
    var input = document.getElementById("input").value;
    var ele = document.createTextNode(input);
    li.appendChild(ele);

    if (input === '') {
        alert("You must write something!");
    } else {
      document.getElementById("listoftitles").appendChild(li);
    }

    document.getElementById('input').value = '';

    var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// const onSwitch = document.getElementById('sun');
// const body = document.querySelector('body');
// let audio = document.getElementById('audio');

// onSwitch.addEventListener('click', () => {
//     audio.play();
  
//     onSwitch.classList.toggle(" bi bi-brightness-high-fill");

//     if (onSwitch.classList.contains("bi bi-moon-fill")) {
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//     } else {
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//     }
// });
const onSwitch= document.getElementById('sun');
const body = document.querySelector('body');
let audio=document.getElementById('audio')
onSwitch.addEventListener('click',()=>{
audio.play();
onSwitch.classList.toggle("bi-moon")

if(onSwitch.classList.toggle("bi-brightness-high-fill")){
body.style.background='white'
body.style.color='yellow'
body.style.transition='2s'
    }else{
        body.style.background='black'
        body.style.color='white'
        body.style.transition='2s'
    }
})