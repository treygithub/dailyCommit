<!--RULES OF ENGAGEMENT BELOW !

E.164 phone number format contains:
[+][country code][area code][local phone number]
+ - plus sign
country code - international country code 1 for US
area code/national destination code - code without leading 0
phone number - local phone number
Here is an example:
Country	    Local phone number    	E.164 formatted number
USA	          415 123 1234        	+14151231234


Penny for My thoughts....
Tech used  HTML CSS3 JAVASCRIPT 
There are many librarys for this sort of thing but wanted to try vanilla js for the Challenge.

I used some HTML5 semantic tags to direct the user to correct pattern and with use of the html "pattern" attribute in the markup in combonation with Javascript Regex function to evaluate weather the correct US code was Enter or not. Its not perfect and does not account for white space .trim() was not used but besides that it holds up quite well.

I used ES6 arrow function and let key words for defining variables.
Vanilla js to grab Dom Nodes and use them to my will.
At the bottom i wrote my own Regex function with .replace() to strip any html characters a user may have used such as (111)111-1111 and then the .concat() function to add the +1 too follow format.  
Used the conditional (ternary) operator in last line to render outcome to screen or many diffrent errors!

I ran out of time others wise could have done a lot better! Spent about 1 hour 35min-->

Thank you! Rob H. Cell #1-605-277-5371

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Robert H. Coding Challenge</title>
</head>
<body>
    <div style="width:250px; padding-top:200px; margin:auto">
      <form id="form1" method="GET">
        <fieldset >
          <legend>Enter US Phone Number</legend>
          <input 
          required
          autofocus
          size="35"
          id="phoneNumber"  
          name="number"
          placeholder="(777) 777-7777 or 6667778888"
          type="tel" 
          pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$" >
          <br>
          <button type="submit" onClick="normalized()">submit</button>
        </fieldset>
      </form>
      <h5 style="text-align:center">E.164 phone number format</h5>
      <p style="text-align:center" id="echo"></p>
    </div>
<script>

normalized = () => {
  event.preventDefault();
    let add = "+1";
    let inpObj = document.getElementById("phoneNumber");
    if (!inpObj.checkValidity()) {
        document.getElementById("echo").innerHTML = inpObj.validationMessage;
    } else {
    let x = document.getElementById("form1");
    let number = "";
    let i;
    for (i = 0; i < x.length ;i++) {
       number += x.elements[i].value  ;
    }
    number = add.concat(number.replace(/[\(\)\-\.\][undefined]/g,''))
    return document.getElementById("echo").innerHTML = number.length > 9 ? number : null
    } 
} 
</script>
</body>
</html>