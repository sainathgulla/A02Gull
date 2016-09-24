var App = {
    launch: function() {
        App.getProductType();
        App.getInsurance();
        App.getQuantity();
        App.getTotalProductPrice();
        App.displayResult();
        App.validateContact();
    },
    getProductType: function () {
        let productPrice = 0;
        //let theForm = document.forms["productsform"];
        //var productChecked = theForm.elements["productchecked"];
        //for(var i=0; i < productChecked.length; i++){
          for(i=0;i<document.productsform.productchecked.length;i++) {
            //if(productChecked[i].checked){
                if(document.productsform.productchecked[i].checked){
                productPrice = productPrice + parseInt(document.productsform.productchecked.value);
                //break;
            }
        }
        return productPrice;
    },
    getInsurance: function () {
        var insurance = new Array();
        insurance["yes"] = 100;
        insurance["no"] = 0;

        let insurancePrice = 0;
        let theForm = document.forms["productsform"];  
        var insuranceSelected = theForm.elements["insuranceselected"];
        for(var i=0; i < insuranceSelected.length; i++) {
            if(insuranceSelected[i].checked){
                insurancePrice = insurance[insuranceSelected[i].value];
                break;
            }
        } 
        return insurancePrice;    
      
    },
    getQuantity: function() {
         var quantity = new Array();
         quantity["1"] = document.productsform.value;
         quantity["2"] = 2;
         quantity["3"] = 3;
         quantity["4"] = 4;
         quantity["5"] = 5;
         quantity["6"] = 6;
         quantity["7"] = 7;
         quantity["8"] = 8;
         quantity["9"] = 9;
         quantity["10"] = 10;

         let totalQuatity = 0;
         let theForm = document.forms["productsform"];
         var numberSelected = theForm.elements["numberselected"];
         totalQuatity = quantity[numberselected.value];
         return totalQuatity;
      
    },
    getTotalProductPrice: function() {
        var productPrice = (getProductType() + getInsurance() ) * getQuantity();
        document.getElementById('totalPrice').innerHTML = "Total price of the Product is $" + productPrice;
    }
};