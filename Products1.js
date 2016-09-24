function getTotalProductPrice(){
    var totalPrice;
    var price=document.getElementById("numberselected").value;

    if(document.getElementById('mobile').checked) {
        totalPrice = document.getElementById('mobile').value;
    }
    else if(document.getElementById('tv').checked) {
        totalPrice = document.getElementById('mobile').value;
    }
    else if(document.getElementById('tablet').checked) {
        totalPrice = document.getElementById('mobile').value;
    }

    window.alert('totalPrice') + ((price * totalPrice));
    //alert(price * totalPrice);
    //document.getElementById('totalPrice').innerHTML = price * totalPrice;
}