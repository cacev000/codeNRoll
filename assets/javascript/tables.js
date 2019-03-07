$(document).ready(function() {
    $.get("/api/tables", newReservation)
        .then(function(data){
            for(i=0;i<data.length;i++){
            var listGroupItem = $("<li class='list-group-item'>");
            listGroupItem.append($("<h2>").text("Name: " + data[i].name));
            listGroupItem.append($("<h3>").text("Phone: " + data[i].phone));
            listGroupItem.append($("<h3>").text("Email: " + data[i].email));
            listGroupItem.append($("<h3>").text("User ID: " + data[i].id));

            $("#reservations-section").prepend(listGroupItem);
        }
        });
});


