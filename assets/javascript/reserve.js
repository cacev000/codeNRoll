 $("#reserveBtn").on("click", function(){
    event.preventDefault();
    var newReservation={
        id : $("#userName").val().trim(),
        name : $("#name").val().trim(),
        email : $("#email").val().trim(),
        phone : $("#phone").val().trim(),
    }
    $.post("/api/reservations", newReservation)
        .then(function(data){
            console.log(data);
            alert("Your Table is reserved")
        });
});

