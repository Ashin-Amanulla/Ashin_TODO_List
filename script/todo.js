$(document).ready(function () {

 ajax();

function ajax(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this);

    if (this.readyState == 4 && this.status == 200) {
        var response=JSON.parse(this.responseText);
        var output="";
        for(var i=0;i<response.length;i++){
          output+=`<li class="item">
          <span> <input class="checkbox" type="checkbox" disabled="true">
              ${response[i].title}</span>
          <span> <i class="deletebtn fa fa-trash"></i>
          </span>
      </li>`
            // output+="<li class='checkbox' type='checkbox' disabled='true'>"++"</li>";
        }
      document.getElementById("demo").innerHTML =
      output;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
});
