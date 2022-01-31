var tasks = {}

console.log (moment().format('llll'));
$("#currentDay").append(moment().format('llll'));
$(".task").on("click", "p", function(){
    var text = $(this).text().trim();
    console.log(text);
    var textInput = $("<textarea>").addClass("task-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus")

});

$(".save").on("click", "button", function(){
   var saveEl = "Button";
   if (saveEl === "Button") {
       var text = this.parentElement.previousElementSibling.children[0].value
       console.log(text)
       var status = $(this)
       .closest(".taskContainer")
       .attr("id")
       .replace("task-", "")
       console.log(status)
      
       var index = $(this)
       .closest(".taskContainer").index();
       console.log(index)

       tasks[status][index].text = text;
      
      
   }
})
console.log(moment().format("H"))