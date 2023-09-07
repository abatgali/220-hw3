function calcInterest() {


    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("interest").value);
    let time = parseFloat(document.getElementById("time").value);
    let interest = (principal*rate*time) / 100;
    let total = (principal + interest).toFixed(2);
    


    document.body.innerHTML += 
    '<h2>Result: </h2>'+ '<p>With a beginning principal of $' + principal + ' and with a growth rate of ' + rate + '% for ' + time
    + ' years, your total interest will be $' + interest + ' with a grand total of $' + total + '.</p>';
    
    
}