document.getElementById('result').style.color = 'white'
document.getElementById('v1').value = "";
document.getElementById('v2').value = "";

function clearInputField() {
    document.getElementById('v1').value = "";
    document.getElementById('v2').value = "";
}
function toBlack(){
    document.getElementById('result').style.color = 'black'
}
    
function calculate() {
    if (isNaN(document.getElementById('v1').value) || isNaN(document.getElementById('v2').value) || document.getElementById('v1').value == 0) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = "Invalid Input. Please Try Again."
    } else {
        document.getElementById('result').style.color = 'white'
        var v1 = parseFloat(document.getElementById('v1').value)
        var v2 = parseFloat(document.getElementById('v2').value)
        if (v1 === v2) {
            document.getElementById('result').style.color = 'black'
            document.getElementById('result').innerHTML = "\n No Change"
        } else {
            const top = (v2 - v1) * 100
            var v1_absolute = v1 * (-1)
            var result = parseFloat(top / v1 ).toFixed(3) 
            if (v1 < 0) {
                result = parseFloat(top / v1_absolute ).toFixed(3)
            }
            if (result < 0) {
                    document.getElementById('result').innerHTML = "\n Decrease of " + result*(-1) + "%"
            }else{
                    document.getElementById('result').innerHTML = "\n Increase of " + result + "%"
            }
            toBlack()
        }
    }
}