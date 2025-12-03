let inventory = []

const findProductIndex = productName => {
  let hasProduct = false
  let productIndex = -1
  for (obj of inventory) {
    if (obj.name == productName.toLowerCase()) {
      hasProduct = true
      productIndex = inventory.indexOf(obj)
      break;
    }
  }
}

const addProduct = product => {
  if (findProductIndex) {
    inventory[findProductIndex].quantity += product.quantity
    console.log(product.name + " " + inventory[findProductIndex].quantity)
  } else {
    inventory.push(product)
    console.log(product.name + " added to inventory")
  }
}

const removeProduct = (productName, quantity) => {
  const thisProduct = findProductIndex(productName)
}


