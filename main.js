//Variables
var user = document.getElementById('user');
var age = document.getElementById('age');
var btn = document.getElementById('btn');
var toDolist = document.getElementById('to-do-list');
var msg = document.getElementById('msg');
var search = document.getElementById('search');
var globalId = 1;
var listArr = [];

//Delete Function
function del(id) {
    var listItems = toDolist.querySelectorAll('li');
    //remove from Dom
    for(var i = 0; i < listItems.length; i++){
        if(listItems[i].id == id){
            listItems[i].remove();
        }
    }

    //remove from Arr
    for(var i = 0; i < listArr.length; i++){
        if(listArr[i].id == id){
            listArr.splice(listArr[i],1);
        }
    }
}

//Adding Function
function add(){
    msg.style.display = "none";
    //Remove Spacing
    var userValue = user.value.toLowerCase().trim();
    //Convert To Number
    var ageNumber = parseInt(age.value);

    //Check User Name && age Number
    if(userValue && ageNumber >= 0){

        //Check Condition Of Input Data 
        if(userValue.length <= 10 &&
            (ageNumber > 0 && ageNumber <= 100)){     
                toDolist.innerHTML += 
                '<li ' +
                    'id=' + globalId.toString() + '><span>User Name:</span>' + userValue + '<span> Age:</span>' + age.value +
                    "<button onclick=del(" + globalId + ")>Delete</button>" + 
                '</li>';
                listArr.push({id:globalId, name:userValue, age:age.value });
                globalId += 1;
                user.value = "";
                age.value = "";

            }else if(userValue.length > 10 &&
                (ageNumber > 0 && ageNumber <= 100)){
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Name Less Than 10 Letters';

            }else if(userValue.length <= 10 &&
                (ageNumber <= 0 || ageNumber > 100)){
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Age From 1 To 100';

            }else{
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Name Less Than 10 Letters <br>Enter User Age From 1 To 100';
            }
    //Check Any Input is Entered
    }else if(userValue && !ageNumber){
        msg.style.display = "block";
        msg.innerHTML = 'Please Enter Your Age';

    }else if(!userValue && ageNumber){
        msg.style.display = "block";
        msg.innerHTML = 'Please Enter Your Name';

    } else{
            msg.style.display = "block";
            msg.innerHTML = 'Please Enter Data';
    }
}

//OnClick Event
btn.onclick = add;

//Search Function
search.onkeyup = function(){
    var searchValue = search.value.toLowerCase().trim();
    var newlist = [];
        for(var i of listArr){
            if(i.name.includes(searchValue)){
                newlist.push('<li ' +
                'id=' + i.id.toString() + '><span>User Name:</span>' + i.name + '<span> Age:</span>' + i.age +
                "<button onclick=del(" + i.id + ")>Delete</button>" + 
            '</li>')
            }
    }
    toDolist.innerHTML = newlist.join("");
}