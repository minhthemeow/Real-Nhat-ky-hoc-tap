const themes = [
  {
    name: "magenta",
    message: "The theme is switch to Magenta mode"
  }, {
    name: "dark",
    message: "The theme is switch to Dark mode"
  }
]

const btn = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const statuss = document.getElementById("status");
const body = document.querySelector("body")

btn.addEventListener("click", () => {
  dropdown.hidden = !dropdown.hidden;
  btn.setAttribute("aria-expanded", dropdown.hidden ? "false" : "true");
})

dropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener("click", () => {
    const liName = li.id.slice(6);
    const selectedTheme = themes.find(t => t.name == liName);
    statuss.innerText = selectedTheme.message;
    body.className = "";
    body.classList.add(li.id);
    dropdown.hidden = !dropdown.hidden;
    btn.setAttribute("aria-expanded", dropdown.hidden ? "false" : "true");
  })
})