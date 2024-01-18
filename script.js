function calculate() {
    // Get the value of the side length input
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    // Check if the input is a valid number
    if (!isNaN(sideLength) && sideLength > 0) {
        // Calculate area and perimeter of the square
        var area = sideLength * sideLength;
        var perimeter = 4 * sideLength;

        // Display the formulas and results on the page
        document.getElementById("areaFormula").innerText = "Area Formula: sideLength × sideLength";
        document.getElementById("areaResult").innerText = "Area Result: " + sideLength*sideLength;

        document.getElementById("perimeterFormula").innerText = "Perimeter Formula: 4 × sideLength";
        document.getElementById("perimeterResult").innerText = "Perimeter Result: " + 4*sideLength;
    } else {
        // Display an error message if the input is not valid
        alert("Invalid input. Please enter a positive number for the side length.");
    }
}
