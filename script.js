var amount = document.getElementById("billamount").value;
var qualityService = document.getElementById("serviceQual").value;
var totalPeople = document.getElementById("people_sharing").value;

function tipCalculator() {
   

    if( amount == "" || qualityService == 0 ||  totalPeople == ""){
        alert("Please Enter the value");
        return;
    }

    var Bill_amount = (amount * qualityService )/totalPeople;
    console.log("Bill Amount",Bill_amount);
    document.querySelector(".print-result").style.display = "block";
    document.querySelector(".tip").innerHTML = Bill_amount;
   

}
document.querySelector(".print-result").style.display = "none";
document.querySelector("#each").style.display = "none";

document.querySelector(".calci-btn").onclick = function () {
    tipCalculator();
    console.log("button clicked");
}

console.log("bill AMount 2",amount);
console.log("service",qualityService);
console.log("Person",totalPeople);