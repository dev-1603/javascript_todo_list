// alert('connected')
var li;
var ul =document.getElementById('list');

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem);



var removebutton =document.getElementById('remove');
removebutton.addEventListener('click',removeItem);

function addItem(){
    // console.log('add button clicked');
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode =document.createTextNode(item)

    if (item === '') {
        return false 
        
    }else {
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        // create label
        var label =document.createElement('label');
        label.setAttribute('for','item');
        // add these element on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
       

        setTimeout(() => {
            li.className ='visual';
        },3);

        input.value ='';

    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
          
    }
}