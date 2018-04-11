// Listen submit
document.querySelector("#loan-form").addEventListener("submit", calcResult);

//Result
function calcResult(e) {
    console.log("Calculating");

    //UI Variables
    const amount = document.getElementById("amount");
    console.log(amount);
    const interest = document.getElementById("interest");
    console.log(interest);
    const years = document.getElementById("years");
    console.log(years);
    const monthlyPayment = document.getElementById("monthly-payment");
    console.log(monthlyPayment);
    const totalPayment = document.getElementById("total-payment");
    console.log(totalPayment);
    const totalInterest = document.getElementById("total-interest");
    console.log(totalInterest);
    const principal = parseFloat(amount.value);
    console.log(principal);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    console.log(calculatedInterest);
    const calculatedPayments = parseFloat(years.value)*12;
    console.log(calculatedPayments);
    //Calculation monthly payment
    const x = Math.pow(1+ calculatedInterest, calculatedPayments);
    console.log(x);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    console.log(monthly);
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        showError("Please check your numbers");
    }
    e.preventDefault();  
}

// Show error
function showError(error) {
    const errorDiv = document.createElement("div");
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);

    function clearError() {
        document.querySelector(".alert").remove();
    }
    
}