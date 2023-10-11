const security = document.getElementById("security");
const basic = document.getElementById("basic");
const tabs_1 = document.getElementById("tabs-1");
const tabs_2 = document.getElementById("tabs-2");

security.addEventListener("click", () =>{
    tabs_1.style.display = "none";
    tabs_2.style.display = "block";
    
})

basic.addEventListener("click", () =>{
    tabs_1.style.display = "block";
    tabs_2.style.display = "none";
    
})