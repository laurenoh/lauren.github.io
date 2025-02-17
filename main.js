// from work page, clicking on work makes the pg scroll to recent work //
if (window.location.href.includes("index.html")) {
  const workLinks = document.querySelectorAll('a[href*="#work"]')
  const target = document.querySelector(".recent-work-padding")
  workLinks.forEach(workLink => {
    workLink.addEventListener('click', (e)=> {
      e.preventDefault()

      let hashval = workLink.getAttribute('href')
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      // adds to history stack when you go back and forth between windows
      history.pushState(null,null,hashval)
    })
  })
}

if (window.location.href.includes("project.html") || window.location.href.includes("project2.html")) {
  const arrowBox = document.querySelector(".arrow-box");
  const projectContainer = document.querySelector(".project-container");

  arrowBox.addEventListener("click", () => {
    projectContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

if (window.location.href.includes("about-me.html")) {
  const arrowBox = document.querySelector(".arrow-box");
  const plungeParagraph = document.querySelector(".plunge-paragraph");
  const yOffset = -82;
  const y = plungeParagraph.getBoundingClientRect().top + window.pageYOffset + yOffset;
  arrowBox.addEventListener("click", () => {
    window.scrollTo({ top: y, behavior: "smooth" })
  })
}


// from non-work pgs, scrolls down to recent work due to #work from URL//
window.onload = () => {
  const target = document.querySelector(".recent-work-padding")
  if (window.location.hash === "#work") {
    target && target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

function viewPwr() {
  window.location = "/project2.html"
}

function viewBridge() {
  window.location = "/project.html"
}
