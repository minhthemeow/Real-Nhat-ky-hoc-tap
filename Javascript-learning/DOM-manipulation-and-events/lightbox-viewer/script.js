const galleryItems = document.getElementsByClassName("gallery-item");
const lbImg = document.getElementById("lightbox-image"); 
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");

/*
ßbecause getElementsByClassName method will return a HTMLColletion but not a Node List, 
we have to convert galleryItems by Array.from() to use forEach() method.
*/

Array.from(galleryItems).forEach(item => {
  item.addEventListener("click", () => {
    let thumbnail = item.src.indexOf("-thumbnail");
    lbImg.src = item.src.slice(0, thumbnail) + ".jpg";
    lightbox.style.display = "flex";
    lightbox.style.flexDirection = "row-reverse";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    console.log(lbImg.src)
  })
})

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
})

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
})

lbImg.addEventListener("click", (e) => {
  e.stopPropagation()
})




// const check = img => {
//   console.log(img.src)
// }