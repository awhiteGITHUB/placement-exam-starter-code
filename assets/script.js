// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Anthony E. White" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0     // Ginger bread
let cc = 0    // Chocolate Chip
let sugar = 0
//let total = 0  // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
 gb ++
 console.log(gb)
document.querySelector('#qty-gb').textContent = gb
var total = gb + cc + sugar
document.querySelector('#qty-total').textContent = total
})
document.getElementById('minus-gb').addEventListener('click', function() {
    gb --
    console.log(gb)
   document.querySelector('#qty-gb').textContent = gb
   var total = gb + cc + sugar
   document.querySelector('#qty-total').textContent = total
   })

document.getElementById('add-cc').addEventListener('click', function() {
    cc ++
    console.log(cc)
   document.querySelector('#qty-cc').textContent = cc
   var total = gb + cc + sugar
   document.querySelector('#qty-total').textContent = total
   })
   document.getElementById('minus-cc').addEventListener('click', function() {
    cc --
    console.log(cc)
   document.querySelector('#qty-cc').textContent = cc
   var total = gb + cc + sugar
   document.querySelector('#qty-total').textContent = total
   })

   document.getElementById('add-sugar').addEventListener('click', function() {
    sugar ++ 
    console.log(sugar)
   document.querySelector('#qty-sugar').textContent = sugar
   var total = gb + cc + sugar
   document.querySelector('#qty-total').textContent = total
   })
   document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar --
   
    console.log(sugar)
   document.querySelector('#qty-sugar').textContent = sugar
   var total = gb + cc + sugar
   document.querySelector('#qty-total').textContent = total
   
   })



  // var total = gb + cc + sugar
 //  document.querySelector('#qty-total').textContent = total   
// console.log(total)
   
   
   
   


    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
//})

// TODO: Hook up event listeners for the rest of the buttons