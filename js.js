/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  if (document.getElementById('same').checked){
    var billname = document.getElementById("shippingName").value;
    var zipcode = document.getElementById("shippingZip").value;
    document.getElementById("billingName").value = billname;
    document.getElementById("billingZip").value = zipcode;
		}
		else{
			document.getElementById('billingName').value="";
      document.getElementById('billingZip').value="";
		}

}
