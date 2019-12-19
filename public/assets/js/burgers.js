// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //when this button is clicked,
    $(".change-devour").on("click", function(event) {
      // create variable id and a variable newDevour
      //id = this.is newDevour=this.newdevour
      //look to burger block where there is data-id and data-newDevour for each burger
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
      
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    //once the form is submitted... create an object with property name that
    //has value of what the user inputted
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
        // devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Then, send the ajax POST request to the Route
      // all we are doing is sending in this data to the route
      // then the route takes care of creating burger_name and filling that in
      // with the data of newBurger (which is just the name the user gave us).
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  