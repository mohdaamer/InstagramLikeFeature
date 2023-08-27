var container = document.querySelector("#container")
var love = document.querySelector("#love")

container.addEventListener("dblclick" , function(){
    love.style.transform = "translate(-50%, -50%) scale(1.3)"
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    } , 2000)
})