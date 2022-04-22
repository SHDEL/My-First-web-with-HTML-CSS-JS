function calculator() {
    let price = Number(document.getElementById('pricetoy').value)
    const quantity = Number(document.getElementById('quantitytoy').value)
    let total = 0
    for(var i = 0 ; i<quantity; i++){
        total+= price
        document.getElementById('totalprice').innerHTML = total + " บาท"
        console.log(total)
    }
}
function reset() {
    location.reload()
}


