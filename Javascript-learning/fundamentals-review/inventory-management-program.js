let inventory = []

const findProductIndex = productName => {
  let productIndex = -1
  for (let obj of inventory) {
    if (obj.name == productName.toLowerCase()) {
      productIndex = inventory.indexOf(obj)
      break;
    }
  }
  return productIndex
}

const addProduct = product => {
  let productPosition = findProductIndex(product.name)
  if (productPosition >= 0) {
    inventory[productPosition].quantity += product.quantity
    console.log(product.name.toLowerCase() + " quantity updated");
  } else {
    product.name = product.name.toLowerCase()
    inventory.push(product)
    console.log(product.name + " added to inventory")
  }
}

const removeProduct = (productName, quantity) => {
  const thisProductIndex = findProductIndex(productName)
  if (thisProductIndex === -1) {
    console.log(`${productName.toLowerCase()} not found`)
    return 0;
  }
  const thisProduct = inventory[thisProductIndex]
  if (thisProduct.quantity < quantity) {
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${thisProduct.quantity}`)
    return 0;
  } else {
    thisProduct.quantity -= quantity
    if (thisProduct.quantity == 0) {
    inventory.splice(thisProductIndex, 1)
    } 
  console.log(`Remaining ${productName.toLowerCase()} pieces: ${thisProduct.quantity}`)
  return 0;
  
  }
  
}
addProduct({name: "FLOUR", quantity: 5})
addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 5)
removeProduct("FLOUR", 5)
removeProduct("FLOUR", 5)
console.log(inventory)


