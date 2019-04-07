function fetchCartProduct(done) {
   $.get('/cart', (data) => {
      done(data)
   })
}


function createCartProductCard(product) {
   return $(`
         Product Name : ${product.name} <br>
         Quantity : ${product.quantity}

   `)
}