//-----------------------------------------------Ajax starts-----------------------------------//

$(document).ready(function () {
  ajax();

  function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log(this);

      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var output = "";
        for (var i = 0; i < response.length; i++) {
          output += `<li class="item">
          <span> <input class="checkbox event1" id="li${i}" type="checkbox"  ${response[i].completed ? "checked disabled='true'" : ""
            }>
              ${response[i].title}</span>
          <span> <i class="deletebtn fa fa-trash"></i>
          </span>
      </li>`;
          // output+="<li class='checkbox' type='checkbox' disabled='true'>"++"</li>";
        }
        document.getElementById("demo").innerHTML = output;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }

  //----------------------------To disable checked------------------------------//

  $("#demo").on("click", "input.event1", function (row) {
    if (row.target.checked) {
      // !stroke out
      $(`#${row.target.id}`).attr("disabled", true); //strike
    } else {
      $(`#${row.target.id}`).attr("disabled", false); // !strike
    }
  });
});


//---------------------------------------------------------Alert after------------------------------//

$("#demo").click(async function () {
  var checkboxes = $("input:checkbox:checked").length;
  console.log("checked", checkboxes);
  let result = await myPromise(checkboxes);
  console.log("result", result);
  if (result) {
    setTimeout(() => { alert("Congrats. 5 Tasks have been Successfully Completed") }, 300);
  }
});

async function myPromise(value) {
  return new Promise((resolve, reject) => {
    return value == 95 ? resolve(true) : reject()
  });
}

// --------------------------------------------------logout mapping--------------------------------------------//

$(document).ready(function () {
  $("#logout").css("cursor", "pointer");
  $("#logout").click(() => {
    location = "index.html";
  });
});
