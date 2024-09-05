<script>
    function calculateIrrigation() {
        const moisture = document.getElementById("moisture").value;
        const temp = document.getElementById("temp").value;
        const humidity = document.getElementById("humidity").value;
        const rainfall = document.getElementById("rainfall").value;
        const soilType = document.getElementById("soilType").value;
        const cropType = document.getElementById("cropType").value;

        let irrigationNeeded = "No";
        let waterUsage = "Low";

        // Simple decision logic based on input values
        if (moisture < 30 || (temp > 30 && humidity < 40 && rainfall === "No")) {
            irrigationNeeded = "Yes";
        }

        if (moisture < 20) {
            waterUsage = "High";
        } else if (moisture < 30) {
            waterUsage = "Medium";
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = <strong>Irrigation Needed:</strong> ${irrigationNeeded}<br><strong>Water Usage Level:</strong> ${waterUsage};
    }
</script>

</body>
</html>
