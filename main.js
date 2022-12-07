function calcPrice(){


    const price = 5.15

    distance = document.getElementById("drive-distance").value
    fuelEconomy = document.getElementById("fuel-economy").value
    people = document.getElementById("num-people").value

    cost = 0

    if(people > 0){
        cost = (price/fuelEconomy * distance)/people
    }

    console.log(`everyone owes ${cost}`)

     const myModal = new bootstrap.Modal(
       document.getElementById("output-modal"),
       focus=true
     )
    myModal.show()
    document.getElementById("output").textContent = `Each person owes $${cost.toFixed(2)}`
}