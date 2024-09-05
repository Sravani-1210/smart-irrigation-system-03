document.getElementById("irrigation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    let moistureLevel = document.getElementById("moisture").value;
    let cropType = document.getElementById("crop").value;
    let weatherCondition = document.getElementById("weather").value;

    let irrigationNeeded = "";
    let waterAmount = 0;

    // Irrigation decision logic
    if (moistureLevel >= 50) {
        irrigationNeeded = "Irrigation is not needed.";
    } else {
        irrigationNeeded = "Irrigation is needed.";
        waterAmount = calculateWaterAmount(moistureLevel, cropType, weatherCondition);
    }

    // Display the result
    document.getElementById("irrigation-need").textContent = irrigationNeeded;
    if (waterAmount > 0) {
        document.getElementById("water-amount").textContent = Amount of water required: ${waterAmount} liters per square meter.;
    } else {
        document.getElementById("water-amount").textContent = "";
    }
});

// Function to calculate water amount based on inputs
function calculateWaterAmount(moisture, crop, weather) {
    let baseWaterNeed = 0;

    // Crop-specific base water needs (in liters per square meter)
    switch (crop) {
        case "wheat":
            baseWaterNeed = 5;
            break;
        case "rice":
            baseWaterNeed = 10;
            break;
        case "corn":
            baseWaterNeed = 8;
            break;
        case "cotton":
            baseWaterNeed = 6;
            break;
        case "soybean":
            baseWaterNeed = 7;
            break;
        case "barley":
            baseWaterNeed = 4;
            break;
        case "tomato":
            baseWaterNeed = 6;
            break;
        case "potato":
            baseWaterNeed = 7;
            break;
        case "carrot":
            baseWaterNeed = 3;
            break;
        case "onion":
            baseWaterNeed = 4;
            break;
    }

    // Adjust water need based on weather condition
    let weatherMultiplier = 1;
    switch (weather) {
        case "sunny":
            weatherMultiplier = 1.2;
            break;
        case "slightly sunny":
            weatherMultiplier = 1.1;
            break;
        case "mostly cloudy":
            weatherMultiplier = 0.9;
            break;
        case "cloudy":
            weatherMultiplier = 0.8;
            break;
        case "rainy":
            weatherMultiplier = 0.6;
            break;
    }

    // Calculate water amount needed based on moisture level
    let waterAmount = baseWaterNeed * weatherMultiplier * (50 - moisture) / 50;

    return waterAmount.toFixed(2);
}
