const theme_toggle = document.getElementById("theme_toggle")

theme_toggle.addEventListener("change", function()
{
    if (this.checked) document.body.classList.add("dark")
    else document.body.classList.remove("dark")
})


