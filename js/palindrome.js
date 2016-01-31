// addEventListener Button to add more input texts
document.getElementById('addBtn').addEventListener('click', function() {
    var inputnumber = parseInt(document.forms[0].elements[document.forms[0].elements.length - 3].name.substring(9)) + 1;
    var theChild = "<input type=\"text\" name=\"userinput" + inputnumber + "\" class=\"form-control input-md\" required>";
    document.getElementById('inputs').innerHTML = document.getElementById('inputs').innerHTML + theChild;
});