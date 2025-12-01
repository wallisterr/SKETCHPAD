grid=document.getElementById("grid")
widthOfGrid= grid.clientWidth()
heightOfGrid= grid.clientHeight()
grid.style.display="flex"

div + 1=document.createElement("div")
grid.append(div1)
div1.innerText="hello"

const createDivs = function(numOfBoxes){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    area=widthOfGrid*heightOfGrid
    AreaOfBoxes=area/numOfBoxes
    sideOfBox=Math.sqrt(AreaOfBoxes)
    for(let i = 1; i<numOfBoxes,i++){
        for(let i = 1;i<numOfBoxes;i++){
            div[i]= document.createElement("div")
        }
    }
}