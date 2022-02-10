const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

//function to convert binary to decimal

function binary() {
    var num = document.getElementById('binary').value;
    var decimal = 0;
    var i = 0;
    while (num) {
        decimal = decimal + Math.pow(2, i) * (num % 10);
        i++;
        num = parseInt(num / 10);
    }
    document.getElementById("decimal").value = decimal;
}
btn1.addEventListener('click', binary);

//function to convert decimal to binary

function decimal() {
    var decimal = document.getElementById('decimal').value;
    var tempDecimal, rem, binary = 0; place = 1;
    tempDecimal = decimal;
    while (tempDecimal > 0) {
        rem = tempDecimal % 2;
        binary = binary + (rem * place);
        tempDecimal = parseInt(tempDecimal / 2);
        place *= 10;
    }
    document.getElementById("binary").value = binary;
}
btn2.addEventListener('click', decimal);


//function to exchange between binary and decimal

var exchangeButton = document.getElementById("exchange-btn");


function exchange() {
    if (document.getElementById("exchange").style.flexDirection == 'column') {
        document.getElementById("exchange").style.flexDirection = 'column-reverse';
        document.getElementById("decimal").placeholder = "Enter Decimal Number";
        document.getElementById("decimal").readOnly = false;
        document.getElementById("binary").readOnly = true;
        document.getElementById("binary").placeholder = "";
        document.getElementById("binary").value = "";
        document.getElementById("decimal").value = "";
        document.getElementById("button2").style.display = 'block';
        document.getElementById("button1").style.display = 'none';
    }
    else {
        document.getElementById("exchange").style.flexDirection = 'column';

        // document.getElementById("exchange").style.flexDirection='column-reverse';
        document.getElementById("binary").placeholder = "Enter Binary Number";
        document.getElementById("decimal").readOnly = true;
        document.getElementById("binary").readOnly = false;
        document.getElementById("decimal").placeholder = "";
        document.getElementById("binary").value = "";
        document.getElementById("decimal").value = "";

        document.getElementById("button2").style.display = 'none';
        document.getElementById("button1").style.display = 'block';
    }
}
exchangeButton.addEventListener('click', exchange);