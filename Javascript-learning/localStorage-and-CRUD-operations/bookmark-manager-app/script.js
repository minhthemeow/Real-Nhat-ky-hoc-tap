const nameVal = document.getElementById("name"); 
const url = document.getElementById("url"); 
const btnView = document.getElementById("view-category-button"); 
const btnAdd = document.getElementById("add-bookmark-button"); 
const btnAddForm = document.getElementById("add-bookmark-button-form"); 
const btnClose = document.getElementById("close-form-button"); 
const btnCloseList = document.getElementById("close-list-button");
const btnDelete = document.getElementById("delete-bookmark-button"); 
const mainSection = document.getElementById("main-section"); 
const bookmarkListSection = document.getElementById("bookmark-list-section"); 
const formSection = document.getElementById("form-section"); 
const categoryNameForm = document.querySelector("form > .category-name"); 
const categoryNameList = document.querySelector("#bookmark-list-section > .category-name"); 
const categoryList = document.getElementById("category-list"); 
const categoryDropdown = document.getElementById("category-dropdown"); 
 
let thisBookmark = {}; 
 
const getBookmarks = () => {
  const raw = localStorage.getItem("bookmarks");
  if (!raw)
    return [];
  try {
    const data = JSON.parse(raw);
  if (!Array.isArray(data))
    return [];
  const ok = data.every(bm => bm && typeof bm === "object" && "name" in bm && "category" in bm && "url" in bm); 
  return ok ? data : []
  } catch {
    return []
  }
}

 
const displayOrCloseForm = () => { 
  mainSection.classList.toggle("hidden"); 
  formSection.classList.toggle("hidden"); 
} 
 
const displayOrHideCategory = () => { 
  mainSection.classList.toggle("hidden"); 
  bookmarkListSection.classList.toggle("hidden"); 
} 
 
btnAdd.addEventListener("click", () => { 
  const category = categoryDropdown.value; 
  categoryNameForm.innerText = category; 
  displayOrCloseForm(); 
}) 
 
btnView.addEventListener("click", () => { 
  const category = categoryDropdown.value; 
  const bookmarks = getBookmarks(); 
  console.log(bookmarks) 
  categoryNameList.innerText = category; 
  displayOrHideCategory(); 
  const hasCategory = bookmarks.some(e => e.category === category) 
  if (!hasCategory) { 
    categoryList.innerHTML = "<p>No Bookmarks Found</p>" 
  } else {
      categoryList.innerHTML = ""; 
      bookmarks.forEach(bm => {
        if (bm.category === category) {
          categoryList.innerHTML += `
          <input id="${bm.name}" value="${bm.name}" name="bookmark" type="radio"/>
          <label for="${bm.name}"><a href="${bm.url}">${bm.name}</a></label><br/>
        `;
        }
      });
  } 
}) 
 
 
btnAddForm.addEventListener("click", () => { 
  let bookmarks = getBookmarks() 
  thisBookmark = { 
    name: nameVal.value, 
    category: categoryDropdown.value, 
    url: url.value 
  }; 
  bookmarks.push(thisBookmark); 
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); 
  nameVal.value = ""; 
  url.value = ""; 
  displayOrCloseForm();
}) 
 
btnClose.addEventListener("click", () => { 
  displayOrCloseForm(); 
}) 
 
btnCloseList.addEventListener("click", () => { 
  displayOrHideCategory(); 
})

btnDelete.addEventListener("click", () => {
  const bookmarkToDelete = categoryList.querySelector("input[name='bookmark']:checked");
  const category = categoryDropdown.value;
  let bookmarks = getBookmarks();
  if (bookmarkToDelete) {
    console.log(bookmarkToDelete.id);
    const deleteIndex = bookmarks.findIndex(bm => bm.name === bookmarkToDelete.id && bm.category === category);
    console.log(deleteIndex)
    if (deleteIndex !== -1) {
      bookmarks.splice(deleteIndex, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }
  bookmarks = getBookmarks();
  const hasCategory = bookmarks.some(e => e.category === category) 
  if (!hasCategory) { 
    categoryList.innerHTML = "<p>No Bookmarks Found</p>" 
  } else {
      categoryList.innerHTML = ""; 
      bookmarks.forEach(bm => {
        if (bm.category === category) {
          categoryList.innerHTML += `
          <input id="${bm.name}" value="${bm.name}" name="bookmark" type="radio"/>
          <label for="${bm.name}"><a href="${bm.url}">${bm.name}</a></label><br/>
        `;
        }
      });
    } 
});
 
 
 
 