document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showFullNameBtn").addEventListener("click", function() {
     
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;

      
        var fullName = firstName + " " + lastName;

     
        var fullNameElement = document.getElementById("fullName");
        fullNameElement.textContent = fullName;
        fullNameElement.style.color = getRandomColor();
    });


function getRandomColor() {
    var colors = ["red", "blue", "green"]; // Add or remove colors as desired
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
});