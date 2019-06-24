var products = [
  { name: "Wonder Woman Figurine", price: "12", image: "https://s3.amazonaws.com/mernbook/marketplace/wonder-woman-2977918_960_720.jpg" },
  { name: "Darth Vader Figurine", price: "19", image: "https://s3.amazonaws.com/mernbook/marketplace/star-wars-2463926_960_720.png" },
  { name: "Joker Figurine", price: "51", image: "https://s3.amazonaws.com/mernbook/marketplace/joker-1225051_960_720.jpg" },
  { name: "Tardis Figurine", price: "14", image: "https://s3.amazonaws.com/mernbook/marketplace/tardis.png" },
  { name: "Old Ford Car Model", price: "46", image: "https://s3.amazonaws.com/mernbook/marketplace/Ford.jpg" },
  { name: "Storm Trooper Figurine", price: "23", image: "https://s3.amazonaws.com/mernbook/marketplace/stormtrooper-1995015_960_720.jpg" }
];
var cart = {
  items: [],
  total: 0
};


$(document).ready(function () {
  console.log("Start here");
  // Basic tasks
 
  // 2. Dynamically load products to view
  for (var i = 0; i < products.length; i++) {
    var divCol = $('<div class="col-md-4">')
    var divCard = $('<div class="card">')
    var image = $('<img class="card-img-top" src="' + products[i].image + '" />')
    var divCardBody = $('<div class="card-body">')
    var title = $('<h5 class="card-title">' + products[i].name + '</h5>')
    var text = $('<p class="card-text">$ ' + products[i].price + '</p>')
    var cartBtn = $('<button class="btn btn-primary">Add to Cart</button>')
    cartBtn.attr('id', i)
    divCard.append(image)
    divCardBody.append(title)
    divCardBody.append(text)
    divCardBody.append(cartBtn)
    divCard.append(divCardBody)
    divCol.append(divCard)
    $('#products .row').append(divCol)

    // 3. Dynamically show total items in Cart
    // 4. Add to cart button functionality
    $('#itemNo').text(cart.items.length)

    cartBtn.click(function (event) {
      var cartItem = products[event.target.id]
      cartItem.quantity = 1
      cart.items.push(cartItem)
      cart.total = cart.total + parseInt(cartItem.price);
      console.log("Cart Total: " + cart.total);

      $('#itemNo').text(cart.items.length)
      $("#total").text(cart.total+"$");

    })

  }
  
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  // 5. Dynamically load cart items
  $('#showCartBtn').click(function () {
    $('#cart').show();
    $('#products').hide();
   
    for (var i = 0; i < cart.items.length; i++) {
      console.log(cart.items[i].name)
  
      var divcartCol = $('<div class="col-md-4">')
      var divcartCard = $('<div class ="card">')
      var divcartimg = $('<img class="card-img-top" src="' + cart.items[i].image + '"/>')
      var divcartbody = $('<div class="card-body">')
      var divcarttitle = $('<h5 class="card-title">' + cart.items[i].name + '</h5>')
      var divcarttext = $(' <p class="card-text">$ 14 x <input type="number" min="0"></p>')
     
    
      

      divcartCard.append(divcartimg)
      divcartbody.append(divcarttitle)
      divcartbody.append(divcarttext)
      
      console.log("done")
     
      
      divcartCard.append(divcartbody)
      
      
      divcartCol.append(divcartCard)
      $('#cart .row').append(divcartCol)
      
  
    } 
   
   
    })

  $('#close').click(function () {
    $('#cart').hide();
    $('#products').show();
    for (var i = 0; i < cart.items.length; i++) {
  
      var divcartCol = $('<div class="col-md-4">')
      $('#cart .row').empty(divcartCol)
      
  
    } 
   
   
    })
    
  })
  

  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage


