// Initialize
$(document).ready(function(){
  $("#add_list").submit(function(event){
    event.preventDefault()
    var input = $("#list_title").val()
    listTitle = new List(input)
    $("#select_list").append(`<option value=${listTitle.title}>${listTitle.title}</option>`)
    $("#lists").append(`<div id=${listTitle.title}><button id="destroy-list">x</button><h2> ${listTitle.title}</h2></div>`)
    $("#lists").on('click', '#destroy-list', function() {
        $(this).parent("div").remove()
    })
    var form = document.getElementById("add_list");
    form.reset();
  });
      $("#add_task").on("submit", function(event){
        event.preventDefault()
        var selectList = $("#select_list").val()
        var inputDesc = $("#task_description").val()
        var inputPri = $("#task_priority").val()
        var finalList = List.all.find(function(list) {
          return list.title === selectList
        })
        var newTask = new Task(inputDesc, inputPri, finalList)
        $(`#${finalList.title}`).append(`<h3>Description: ${inputDesc} Priority: <strong> ${inputPri}</strong></h3>`)
        // var resetPri = document.getElementById("task_priority");
        // form.reset();
        var formA = document.getElementById("add_task");
        formA.reset();
      })
});


// $(document).ready(function(){
//     $("#add_list").submit(function(event){
//       event.preventDefault()
//       var input = $("#list_title").val()
//       listTitle = new List(input)
//       $("#select_list").append(`<option value=${listTitle.title}>${listTitle.title}</option>`)
//       $("#lists").append(`<div id=${listTitle.title}><button id="destroy-list">x</button><h2> ${listTitle.title}</h2></div>`)
//       $("#lists").on('click', '#destroy-list', function() {
//         $(this).parent("div").remove()
//       })
//       var input = $("#list_title").val(" ")
//   });
//   $("#add_task").on("submit", function(event){
//     event.preventDefault()
//     var selectList = $("#select_list").val()
//     var inputDesc = $("#task_description").val()
//     var inputPri = $("#task_priority").val()
//     var finalList = List.all.find((list) =>  list.title === selectList)
//     var newTask = new Task(inputDesc, inputPri, finalList)
//     $(`#${finalList.title}`).append(`<h3>Description: ${inputDesc} Priority: <strong> ${inputPri}</strong></h3>`)
//     // var selectList = $("#select_list option:selected").val(`${listTitle.title}`)
//     var inputDesc = $("#task_description").val(" ")
//     var inputPri = $("#task_priority").val(" ")
//   })
// });
