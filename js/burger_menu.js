export default function burgerMenu(panelBtn,menu__panel,menuLink){
    const d = document;

    d.addEventListener("click",e=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(menu__panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            d.querySelector(menu__panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}