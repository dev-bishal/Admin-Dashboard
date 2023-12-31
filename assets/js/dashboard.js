var mainContainer = document.getElementById("app-root");
var mainTitle = document.getElementById("pageTitle");

function showComponent(desiredComponentId, PageTitle, functionToExecute = null) {
    mainContainer.innerHTML = "";
    let component = document.getElementById(desiredComponentId).outerHTML;
    mainContainer.innerHTML = component;
    mainTitle.innerText = PageTitle;
    if (functionToExecute != null)
        functionToExecute();

}

/* Hide and Show SideMenu bar Starts */
var menuToggleBtn = document.getElementById("menuToggleBtn");
var menuCloseToggleBtn = document.getElementById("menuCloseToggleBtn");

function toggleSidebar() {
    let sidebarComponent = document.querySelector(".side-menubar-container");
    let dashboardComponent = document.querySelector(".dashboard-component-container");
    sidebarComponent.classList.toggle("sidebarHide");
    dashboardComponent.classList.toggle("dashboardStretch");
}

menuCloseToggleBtn.addEventListener("click", (e) => { toggleSidebar() })
menuToggleBtn.addEventListener("click", (e) => { toggleSidebar() })
/* Hide and Show SideMenu bar Ends*/

// showComponent("dashboard", "Dashboard", loadPie);
showComponent("allPosts", "All Posts");

// show Menu starts
function triggerMenu(menuBtn) {
    menuBtn.nextElementSibling.classList.toggle("hide");
}
function menuOptionsToggle() {
    console.log("Test");
    var showOptionMenuTriggers = document.querySelectorAll(".optionTrigger");
    showOptionMenuTriggers.forEach(optionTriggerEle => {
        optionTriggerEle.addEventListener("click", () => {
            console.log("Click");
            optionTriggerEle.nextElementSibling.classList.toggle("hide");
        })
    });
}
// show Menu ends

var SidebarMenuOptions = document.querySelectorAll(".menuList li");
SidebarMenuOptions.forEach(SidebarMenu => {
    SidebarMenu.addEventListener("click", () => {
        if (SidebarMenu.nextElementSibling.nodeName == "UL") {
            SidebarMenu.children[1].classList.toggle("rotate-180");

            SidebarMenu.nextElementSibling.classList.toggle("invisible");
            SidebarMenu.nextElementSibling.classList.toggle("h-0");
        }
    })
});
// show Menu ends
