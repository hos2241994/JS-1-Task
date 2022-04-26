//Variables
var user = document.getElementById('user');
var age = document.getElementById('age');
var btn = document.getElementById('btn');
var toDolist = document.getElementById('to-do-list');
var msg = document.getElementById('msg');
var id = 1;

//Delete Items From To Do list
function del(id) {
    var listItems = toDolist.querySelectorAll('li');
    for(var i = 0; i < listItems.length; i++){
        if(listItems[i].id == id){
            listItems[i].remove();
        }
    }
}

//Adding Function
function add(){
    msg.style.display = "none";
    //Remove Spacing
    var userValue = user.value.trim();
    //Convert To Number
    var ageNumber = parseInt(age.value);

    //Check User Name && age Number
    if(userValue && ageNumber){

        //Check Condition Of Input Data 
        if(userValue.length <= 10 &&
            (ageNumber > 0 && ageNumber <= 100)){     
                toDolist.innerHTML += 
                '<li ' +
                    'id=' + id.toString() + '><span>User Name:</span>' + userValue + '<span> Age:</span>' + age.value +
                    "<button onclick=del(" + id + ")>Delete</button>" + 
                '</li>';
                id += 1;
                user.value = "";
                age.value = "";

            }else if(userValue.length > 10 &&
                (ageNumber > 0 && ageNumber <= 100)){
                msg.style.display = "block";
                msg.innerHTML = 'Enter User Name Less Than 10 Letters';

            }else if(userValue.length <= 10 &&
                (ageNumber < 0 || ageNumber > 100)){
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