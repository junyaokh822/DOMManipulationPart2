// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//=======================part 1 Getting Started================================
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//=======================part 2 Creating a Menu Bar============================
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//=======================part 3 Adding Menu Buttons============================
menuLinks.forEach((link) => {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", aEl.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});
