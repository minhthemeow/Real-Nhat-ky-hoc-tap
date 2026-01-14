const fullName = document.getElementById("full-name"); 
const email = document.getElementById("email"); 
const orderNo = document.getElementById("order-no"); 
const productCode = document.getElementById("product-code"); 
const quantity = document.getElementById("quantity"); 
const complaintsGroup = document.getElementById("complaints-group"); 
const complaintsDes = document.getElementById("complaint-description"); 
const solutionsGroup = document.getElementById("solutions-group"); 
const solutionDes = document.getElementById("solution-description"); 
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn"); 
const comDesCon = document.getElementById("complaint-description-container");
const soDesCon = document.getElementById("solution-description-container");
const otherCheckbox = document.getElementById("other-complaint");
const otherRadio = document.getElementById("other-solution");
const msgBox = document.getElementById("message-box");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  comDesCon.hidden = true;
  soDesCon.hidden = true;
})

clearBtn.addEventListener("click", () => {
  form.reset();
  Array.from(form.elements).forEach(e => e.style.borderColor = "#000");
});

otherCheckbox.addEventListener("click", () => {
  comDesCon.hidden = !comDesCon.hidden;
});

form.addEventListener("submit", () => { 
  if (!isValid()) {
    const validateObj = validateForm();
    msgBox.textContent = "Please, fill out the required fields correctly before submitting.";
    for (let e in validateObj) {
      if (!validateObj[e]) {
        const thisEl = document.getElementById(e);
        thisEl.style.borderColor = "red";
      }
    }
  }
}); 

const isValid = () => Object.values(validateForm()).every(el => el == true); 

const validateForm = () => {  
  return {
    "full-name": !!fullName.value.trim(), 
    "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), 
    "order-no": /^2024\d{6}$/.test(orderNo.value.trim()), 
    "product-code": /^[a-zA-Z]{2}[0-9]{2}-[a-zA-Z][0-9]{3}-[a-zA-Z]{2}[0-9]$/.test(productCode.value), 
    "quantity": quantity.value > 0, 
    "complaints-group": complaintsGroup.querySelectorAll("input[type='checkbox']:checked").length > 0, 
    "complaint-description": !otherCheckbox.checked || complaintsDes.value.trim().length > 20, 
    "solutions-group": solutionsGroup.querySelectorAll("input[type='radio']:checked").length > 0, 
    "solution-description": !otherRadio.checked || solutionDes.value.trim().length > 20
  };
}; 

fullName.addEventListener("change", () => { 
  if (!fullName.value) { 
    fullName.style.borderColor = "red"; 
  } else { 
    fullName.style.borderColor = "green"; 
  } 
}) 
email.addEventListener("change", () => { 
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (regex.test(email.value)) { 
    email.style.borderColor = "green"; 
  } else { 
    email.style.borderColor = "red"; 
  } 
}) 
orderNo.addEventListener("change", () => { 
  const regex = /^2024\d{6}$/; 
  if (regex.test(orderNo.value)) { 
    orderNo.style.borderColor = "green"; 
  } else { 
    orderNo.style.borderColor = "red"; 
  } 
}); 

productCode.addEventListener("change", () => { 
  const regex = /^[a-zA-Z]{2}[0-9]{2}-[a-zA-Z][0-9]{3}-[a-zA-Z]{2}[0-9]$/; 
  if (regex.test(productCode.value)) { 
    productCode.style.borderColor = "green"; 
  } else {  
    productCode.style.borderColor = "red"; 
  } 
}); 
quantity.addEventListener("change", () => { 
  const regex = /\d/; 
  if (regex.test(quantity.value) && quantity.value > 0) { 
    quantity.style.borderColor = "green"; 
  } else { 
    quantity.style.borderColor = "red"; 
  } 
}); 

complaintsGroup.addEventListener("change", () => { 
  const checkBoxes = complaintsGroup.querySelectorAll("input[type='checkbox']");
  const isAnyCheck = Array.from(checkBoxes).some(cb => cb.checked);
  if (isAnyCheck) {
    complaintsGroup.style.borderColor = "green";
  } else {
    complaintsGroup.style.borderColor = "red";
  }
});

complaintsDes.addEventListener("change", () => {
  if(otherCheckbox.checked && complaintsDes.value.length < 20) {
    complaintsDes.style.borderColor = "red";
  } else {
    complaintsDes.style.borderColor = "green";
  }
});

solutionsGroup.addEventListener("change", () => {
  const radios = solutionsGroup.querySelector("input[type='radio']:checked");
  const isOther = !!radios && radios.value == "other";
  soDesCon.hidden = !isOther;
  solutionsGroup.style.borderColor = radios ? "green" : "red";
});

solutionDes.addEventListener("change", () => {
  if (otherRadio.checked && solutionDes.value.length < 20) {
    solutionDes.style.borderColor = "red";
  } else {
    solutionDes.style.borderColor = "green";
  }
});

 