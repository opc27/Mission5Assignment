$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let hours = $("#hours").val(); // get input value for hours
        let rate = $("#rate").val(); // get hourly rate (set)
        let total;

        // check to make sure it's a positive input
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid number");
            $("#total").val(""); // clear total field
            return;
        }
        
        // calculate total cost
        total = hours * rate;
        
        // display total in output field
        $("#total").val("$" + total.toFixed(2));
    })
})
