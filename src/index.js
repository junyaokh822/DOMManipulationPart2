var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

//===========================Part 3 Creating the Submenu============================
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

//===========================Part 4 and 5 Adding Menu Interaction===================
const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault(); //prevent refresh
  if (!e.target.matches("a")) {
    //stop if not tag <a>
    return;
  }
  console.log(e.target.textContent);

  const clickedLinkText = e.target.textContent.toLowerCase();
  const linkObject = menuLinks.find((link) => link.text === clickedLinkText);

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    //hide submenu if deactivate
    subMenuEl.style.top = "0";
  } else {
    e.target.classList.add("active");

    //show or hide submenu
    if (linkObject && linkObject.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(linkObject.subLinks);
    } else {
      subMenuEl.style.top = "0";
      mainEl.innerHTML = `<h1>${clickedLinkText.toUpperCase()}</h1>`;
    }
  }

  //remove active class from all other links
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
  });
});

//helper function
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = ""; //clear current contents
  subLinks.forEach((link) => {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.textContent = link.text;
    subMenuEl.appendChild(aEl);
  });
}

//delegated 'click' event listener
subMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.matches("a")) {
    return;
  }
  console.log("Submenu clicked:", e.target.textContent);
  subMenuEl.style.top = "0";
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
});
