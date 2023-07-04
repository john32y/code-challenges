const shoppingList = ["jelly", "soda", "cheese", "ice cream", "bread"]
const inCart = ["ice cream", "soda"]
let newlist = shoppingList.filter(item =>
    !inCart.includes(item))
    console.log(newlist)
