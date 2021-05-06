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
          <span> <input class="checkbox event1" id="li${i}" type="checkbox"  ${response[i].completed ? "checked disabled='true'" : ''}>
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

  $("#demo").on('click', 'input.event1', function (row) {
    console.log('\n h', row)
    if (row.target.checked) { // !stroke out
      $(`#${row.target.id}`).attr('disabled', true) //strike
    } else {
      $(`#${row.target.id}`).attr('disabled', false) // !strike

    }
  })
});

// --------------------------------------------------logout mapping

$(document).ready(() => {
  $("#logout").click(() => {
    location = "index.html";
  });
})
