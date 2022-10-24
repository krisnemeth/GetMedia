document.getElementById('homeBtn').addEventListener('click',function(){
    gotoURL('home.html')
})
document.getElementById('searchBtn').addEventListener('click',function(){
    gotoURL('search.html')
})
document.getElementById('vouchersBtn').addEventListener('click',function(){
    gotoURL('vouchers.html')
})
document.getElementById('contactBtn').addEventListener('click',function(){
    gotoURL('contact.html')
})
document.getElementById('cartBtn').addEventListener('click',function(){
    gotoURL('cart.html')
})

function gotoURL(URL) {
  document.location.href = URL;
}