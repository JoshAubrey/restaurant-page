import header from "./header.js"
import about from "./about.js"
import foodMenu from "./foodMenu.js"
import location from "./location.js"

header()
about()

function clearNavSelection () {
    document.querySelectorAll('.menu-item').forEach(menuItem => 
        menuItem.classList.remove('menu-item-selected')
        )
}

document.querySelectorAll(".menu-item").forEach( button =>
        button.addEventListener("click", function(e) {
          clearNavSelection()
          document.getElementById('content').removeChild(document.querySelector('.inner-content'))
          switch(e.target.id){
              case 'about':
                  about()
              break
              case 'menu':
                  foodMenu()
              break
              case 'location':
                  location()
              break
          }
        })
  )