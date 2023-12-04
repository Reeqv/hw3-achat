function send(){
    let message = document.getElementById('form__user-message').value

    let name = document.getElementById('form__user-name').value
        if (name == ""){
            name = "Annonymous"
        }                
        if (message == ""){
            document.getElementById('form__user-message').style = "outline: 2px solid red"                    
        }else{
            list_test = name + ": " + message
            document.getElementById('form__user-message').style = ""
            var ul = document.getElementById("chat__list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(list_test));
            ul.appendChild(li);
            document.getElementById('form__user-message').value = ""
        }
    let chat = document.getElementsByClassName('chat__window')
    chat.scrollTo(0, chat.scrollHeight);
}         

