//-----------------------------------------------Ajax starts-----------------------------------//

$(document).ready(function () {
  ajax();

  function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var output = "";
        for (var i = 0; i < response.length; i++) {
          output += `<li id="bi${i}" class="item">
          <span> 
            <input class="checkbox event1" id="li${i}" type="checkbox"  ${response[i].completed ? "checked disabled='true'" : ""}/>  
            <span id="sli${i}" ${response[i].completed ? "class='highlight'" : ""}>${response[i].title} 
            </span>
          </span>
          <span> 
            <button class="btn"><i id="i${i}" class="deletebtn fa fa-trash"></i>
            </button>
          </span>
      </li>`; //hard-coding the list ; creating unique ids for check boxes, titles for boolean.
        }
        document.getElementById("demo").innerHTML = output;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }



  // --------------------------------------------------logout mapping--------------------------------------------//
  $("#logout").css("cursor", "pointer");
  $("#logout").click(() => {
    location = "index.html";
  });

  //---------------------------------------------------------Strike Checked------------------------------//

  $("#demo").on("click", "input.event1", async function (row) {
    if ($(`#s${row.target.id}`)[0].classList.contains("highlight")) {
      // checking
      $(`#s${row.target.id}`)[0].classList.remove("highlight"); // !strike
    } else {
      $(`#s${row.target.id}`)[0].classList.add("highlight"); //strike

    }

    //---------------------------------------------------------Promise------------------------------//


    var checkboxes = $("input:checkbox:checked").length;

    let result = await myPromise(checkboxes);
    if (result) {
      setTimeout(() => { alert("Congrats. 5 Tasks have been Successfully Completed") }, 100);
    }

  });

  async function myPromise(value) {
    return new Promise((resolve, reject) => {
      return value == 95 ? resolve(true) : reject()
    });
  }

  //---------------------------------------------------------Delete list------------------------------//


  $("#demo").on("click", "button.btn", async function (row) {
    $(`#b${row.target.id}`).fadeOut("normal", function() {
    $(`#b${row.target.id}`).remove();
    });
  });

  //---------------------------------------------------------Mouse over deletebtn style------------------------------//


  //---------------------------------------------------------Refresh------------------------------//

  $("#todoh1, #img").click(() => {
    location.reload();
  });








});  //document.ready ends






