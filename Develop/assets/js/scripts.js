var tasks = {}

console.log(moment().format('llll'));
$("#currentDay").append(moment().format('llll'));


$(".task").on("click", "p", function () {
    var text = $(this).text().trim();
    console.log(text);
    var textInput = $("<textarea>").addClass("task-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus")

});

$(".save").on("click", "button", function () {
    var saveEl = "Button";
    if (saveEl === "Button") {
        console.log(this.parentElement.previousElementSibling)
        var text = this.parentElement.previousElementSibling.value
        console.log(text)
        var status = $(this)
            .closest(".taskContainer")
            .attr("id")

        console.log(status)

        var index = $(this)
            .closest(".taskContainer").index();
        console.log(index)

        localStorage.setItem(status,text,index);




    }
})

function saveTask(){
    $("#9 .task").val(localStorage.getItem("9"))
    for (i = 9; i<=17; i++) {
        $("#" + i + " .task").val(localStorage.getItem( i + ""));
        
    }
}

function trackHour() {
    var currentTime = moment().format("H");
    for (var i = 9; i <= 17; i++) {
        var id = document.getElementById(i).children[1]

        if (i < currentTime) {
            id.classList.add("past")

        } else if (i == currentTime) {
            id.classList.add("present")
        } else if (i > currentTime) {
            id.classList.add("future")
        }


    }

}
trackHour()
saveTask()