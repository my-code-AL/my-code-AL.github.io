
const dood = document.getElementById('buttin');

const imgbox = document.getElementById('image_box');
const person = document.getElementById('personal_box');
const mane = document.getElementById('main');
const head = document.getElementById('head');
const txtbox = document.getElementById('txt_box');
const pictures = document.getElementById('pictures');
const pictureone = document.getElementsByClassName('some_pictures')[0];
const picturetwo = document.getElementsByClassName('some_pictures')[1];
const picturethree = document.getElementsByClassName('some_pictures')[2];
const contact = document.getElementById('contact');



function ChangeColor() {
    
    main.style.backgroundColor = "red";
}

dood.addEventListener('click',colorChange);







let colorValue = function() {
  return Math.floor(Math.random() * 256);
};
function colorChange(){
    
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    imgbox.style.backgroundColor = randomColor;
    person.style.backgroundColor = randomColor;
    mane.style.backgroundColor = randomColor;
    head.style.backgroundColor = randomColor;
    txtbox.style.backgroundColor = randomColor;
    pictures.style.backgroundColor = randomColor;
    pictureone.style.backgroundColor = randomColor;
    picturetwo.style.backgroundColor = randomColor;
    picturethree.style.backgroundColor = randomColor;
    contact.style.backgroundColor = randomColor;
};



// email.addEventListener("mouseout", thaFunction);
