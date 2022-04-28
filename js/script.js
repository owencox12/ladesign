let tabs = document.querySelectorAll(".tabs__btns_btn")

let tabsItem = document.querySelectorAll(".tabs__item")

tabs.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        tabs.forEach(function(item){
            item.classList.remove('tabs__btns_btn_active')
        })
        tabsItem.forEach(function(item){
            item.classList.remove("tabs__item_active")
        })
        currentBtn.classList.add("tabs__btns_btn_active")
        currentTab.classList.add("tabs__item_active")
    })
})


// let aboutB = document.querySelectorAll(".about__item_list_menu_type")
// console.log(aboutB)

// aboutB.forEach(function(e){
//     e.addEventListener("click", function(e){
//         if (e.target.classList.contains("about__item_list_menu_type")) {
//             toggleItem(e.target)
//         }
//     })
// })

function toggleItem(ask) {
    let answer = ask.parentNode
    console.log(answer)
    answer = answer.parentNode.querySelector(".about__item_list_menu_descr")
    console.log(answer)
    if (answer.classList.contains("about__item_list_menu_descr_active")) {
        let animate = answer.animate([{ opacity: 1 },{ opacity: 0 }], {
       duration: 400
        });
            animate.addEventListener("finish", function(){
                answer.classList.remove("about__item_list_menu_descr_active")
            })
    } else {
        answer.classList.add("about__item_list_menu_descr_active")
    }
}



let type = document.querySelectorAll(".about__item_list_menu_type")

type.forEach(function(e){
    e.addEventListener("click", function(){
        let content = e.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll(".about__item_list_menu_descr").forEach(function(el){
                el.style.maxHeight = null
            })
        } else {
            document.querySelectorAll(".about__item_list_menu_descr").forEach(function(el){
                el.style.maxHeight = null
            })
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})

let burger = document.querySelector(".main__header_burger")
let burgerMenu = document.querySelector(".main__header_burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
    burger.classList.toggle("main__header_burger_active")
    burgerMenu.classList.toggle("main__header_burger_list_active")
    body.classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 100) {
        document.querySelector(".main__header").classList.add("main__header_active")
    } else {
        document.querySelector(".main__header").classList.remove("main__header_active")
    }
})


let logo = document.querySelector(".main__header_logo")


logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})