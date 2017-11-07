window.onload = function(){

    var sendButton = document.getElementsByName("btn")[0];
    var thinkInput = document.getElementsByName("txt")[0];
    var timeLine = document.getElementsByName("timeLine")[0];
    var cont = document.getElementById("cont");

sendButton.onclick = function(){/
    if (thinkInput.value == ""|| thinkInput.value.length > 140) {
        sendButton.disabled = false;

  }else {
        var tuitDiv = document.createElement("div");
        var nameSpan = document.createElement("span");
        var dateSpan = document.createElement("span");
        var tuitP = document.createElement("p");
        tuitDiv.appendChild(nameSpan);
        tuitDiv.appendChild(dateSpan);
        tuitDiv.appendChild(tuitP);
        tuitDiv.className = "twitt"
        nameSpan.textContent = "Usuario";
        dateSpan.textContent = new Date();
        tuitP.textContent = thinkInput.value;

        timeLine.insertBefore(tuitDiv, timeLine.children[0]);
           }
    }
thinkInput.onkeyup=function(){
    var textMax = 140;
    var resta = "";
    var obs= thinkInput.value.length;
    resta = textMax-obs;

   cont.value=resta;

   if(resta < 0){
            sendButton.disabled = true;
            cont.style.color='red';
            sendButton.style.backgroundColor = 'turquoise';

  }if (resta>=0){
            sendButton.disabled = false;
            cont.style.color='teal';
            sendButton.style.backgroundColor= 'teal';

  }if (resta<=20 && resta >10){
            sendButton.disabled = false;
            cont.style.color='turquoise';
            sendButton.style.backgroundColor= 'teal';

  }if (resta<=10 && resta >=0){
            sendButton.disabled = false;
            cont.style.color='orange';
            sendButton.style.backgroundColor= 'teal';
        }
    }
}

    var textarea = document.getElementById("comment");
    var heightLimit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
