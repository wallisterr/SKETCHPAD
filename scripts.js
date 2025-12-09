grid=document.getElementById("grid")
button=document.getElementById("button")
buttonBox=document.querySelector(".buttons")
inputdiv=document.createElement("div")
input=document.createElement("input")
buttonBox.append(inputdiv)

label = document.createElement("label")
label.innerText="number of boxes per side:"
label.style.alignSelf="center"
label.style.marginRight="1vh"

inputdiv.style.display="flex" 
input.style.alignSelf= "center"
input.style.height = "3vh"
input.style.outline="black solid 1px"

submitButton = document.createElement("button")

submitButton.innerText= "Submit"
submitButton.style.padding="0.5vh"
submitButton.style.marginLeft="0.4vh"
submitButton.style.borderRadius="3px"
submitButton.style.alignSelf="center"

submitButton.addEventListener("mouseenter", () =>{
    submitButton.style.backgroundColor="Yellow"
})
submitButton.addEventListener("mouseleave", () =>{
    submitButton.style.backgroundColor=""
})
submitButton.addEventListener("click", () => {
    createDivs((Number(input.value))**2)
})


button.addEventListener("click" ,() => {
    while(inputdiv.firstChild){
        inputdiv.removeChild(inputdiv.firstChild)
    }
    inputdiv.append(label)
    inputdiv.append(input)
    inputdiv.append(submitButton)
})

const createDivs = function(numOfBoxes){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild)
    }

    
    rectangleOfGrid= grid.getBoundingClientRect()
    widthOfGrid= rectangleOfGrid.width
    heightOfGrid= rectangleOfGrid.height

    area=widthOfGrid*heightOfGrid
    AreaOfBoxes=area/numOfBoxes
    sideOfBox=Math.sqrt(AreaOfBoxes)

    for(let i = 0; i<numOfBoxes;i++){
         let div = document.createElement("div")
            div.style.height= `${sideOfBox}px` 
            div.style.width= sideOfBox+"px"
            div.style.opacity="0.1"
            div.addEventListener("mouseenter", ()=>{
                red = Math.floor(Math.random()*255)
                green = Math.floor(Math.random()*255)
                blue= Math.floor(Math.random()*255)
                div.style.backgroundColor= `rgb(${red},${green},${blue})`
                styles= getComputedStyle(div)
                opacity=styles.opacity
                div.style.opacity=Number(opacity)+0.05

            })
            grid.append(div)
    }
}