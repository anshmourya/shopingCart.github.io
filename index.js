//FUNCTION FOR THE ADDING INTON THE CART.




function forplus(count, total, totalAmtOfAllProduct) { //count=number in cart,total= total of one product.
    let counting = document.getElementById(count);
    let totalAmountOfOneProduct = document.getElementById(total);
    let totalAmtOfAllProducts = document.getElementById(totalAmtOfAllProduct);
    counting.innerText = parseInt(counting.innerText) + 1;


    totalAmountOfOneProduct.innerText = parseInt(totalAmountOfOneProduct.innerText) + 20;
    totalAmtOfAllProducts.innerText = parseInt(totalAmtOfAllProducts.innerText) + 20;


}

const forMinus = (count, total, totalAmtOfAllProduct) => {
    let counting = document.getElementById(count);
    let totalAmountOfOneProduct = document.getElementById(total);
    let totalAmtOfAllProducts = document.getElementById(totalAmtOfAllProduct);
    if (counting.innerText == 0) {

        counting.innerText = 0;
        totalAmountOfOneProduct.innerText = 0;

    } else {
        counting.innerText = parseInt(counting.innerText) - 1;
        totalAmountOfOneProduct.innerText = parseInt(totalAmountOfOneProduct.innerText) - 20

        totalAmtOfAllProducts.innerText = parseInt(totalAmtOfAllProducts.innerText) - 20


    }


}

//REMOVE THE ONE PRODUCT FROM THE CART
const forRemove = (count, total, totalAmtOfAllProduct) => {
    let counting = document.getElementById(count);
    let totalAmountOfOneProduct = document.getElementById(total);
    let totalAmtOfAllProducts = document.getElementById(totalAmtOfAllProduct);
    counting.innerText = 0;
    totalAmtOfAllProducts.innerText -= totalAmountOfOneProduct.innerText;
    totalAmountOfOneProduct.innerText = 0;

}
//REMOVE ALL THE IN ONE CLICK
const forRemoveAll = () => {
    let counting = document.getElementsByClassName('count');
    let totalAmountOfOneProduct = document.getElementsByClassName('amount');
    let totalAmtOfAllProducts = document.getElementById('totalAmtOfAllProduct');
    totalAmtOfAllProducts.innerText = 0;
    for (let i = 0; i < counting.length; i++) {
        counting[i].innerText = parseInt(0);
        totalAmountOfOneProduct[i].innerText = parseInt(0);

    }

}
let checkouts = document.getElementById('checkout');
checkouts.addEventListener('click', forCheckout => {
    let totalAmtOfAllProducts = document.getElementById('totalAmtOfAllProduct');
    if (totalAmtOfAllProducts.innerText == 0) {
        document.getElementById('error').style.display = "block";
    } else {
        window.location = "succes.html";
    }

})