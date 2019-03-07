 $(document).ready(function () {
    $("#reserveBtn").on("click", function () {
        // event.preventDefault();

        var userName = $("#userName").val().trim();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();

        
        if (userName !== '' || name !== '' || email !== '' || phone !== '') {
            var newReservation={
                id : userName,
                name : name,
                email : email,
                phone : phone,
            }
            $.post("/api/reservations", newReservation)
            .then(function(data){
                console.log(data);
                alert("Your Table is reserved");
            });
        } else {
            alert("Please fill the form");
        }
    });

});