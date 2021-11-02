
function scrollFunction() {
    const shortLinksNav = document.getElementById("shortLinks");
    const stickyTitle = document.getElementById("stickyTitle");
    const topButtons = document.getElementById("topButtons");
    if (window.pageYOffset > stickyTitle.offsetTop) {
      topButtons.style.flexDirection = "row";
      stickyTitle.classList.add("fixed");
      shortLinksNav.classList.add("fixed");
      if (!document.body.classList.contains("breakpoint-357")) {
        shortLinksNav.style.top = `${stickyTitle.offsetHeight}px`;
      }
    } else {
      topButtons.style.flexDirection = "column";
      stickyTitle.classList.remove("fixed");
      shortLinksNav.classList.remove("fixed");
    }
  }

  window.addEventListener(
    "scroll",
    function headerScroll() {
      if (document.body.contains(document.getElementById("stickyTitle"))) {
        scrollFunction();
      }
    },
    false
  );

  if (document.body.contains(document.getElementById("shortLinks"))) {
    const shortLinks = document.getElementById("shortLinks");
    const listView = document.createElement("ul");
    const headings = document.querySelectorAll("[data-quick-links]");
    if (headings.length > 2) {
      headings.forEach(element => {
        let link;
        const text = element.childNodes;
        text.forEach(ele => {
          if (ele.data !== "undefind") {
            link = ele.data;
          }
        });
        const quickLinkData = element.dataset.quickLinks;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `#${element.parentNode.id}`);
        a.setAttribute("data-quick-links", quickLinkData);
        a.innerHTML = link;
        li.appendChild(a);
        listView.appendChild(li);
      });
      shortLinks.appendChild(listView);
    }

    const a = document.querySelectorAll("#shortLinks ul li a");
    for (let i = 0, { length } = a; i < length; i++) {
      a[i].onclick = function activatelink(e) {
        e.preventDefault();
        const b = document.querySelector("#shortLinks ul li a.active");
        if (b) b.classList.remove("active");
        this.classList.add("active");
        const targetdiv = this.hash.replace("#", "");
        const targetElement = document.getElementById(targetdiv);
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      };
    }
  }
