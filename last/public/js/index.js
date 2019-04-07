$(() => {

   let cartProductList = $('#prouct-list')

   fetchCartProducts((products) => {
      cartProductList.empty()

      for (product of products) {
         cartProductList.append(createCartProductCard(product))
      }
   })

})