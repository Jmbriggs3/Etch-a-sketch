const container = document.getElementById("container"); 

function makeRows(rows, cols) { 
    container.style.setProperty('--grid-rows', rows); 
    container.style.setProperty('--grid-cols', cols); 
    for (c = 0; c < (rows * cols); c++) { 
        let cell = document.createElement("div"); 
        cell.innerText = (c + 1); 
        container.appendChild(cell).className = "grid-item"; 
        cell.addEventListener("mouseover", paint); 
    };
}; 
        

function paint(e) { 
    e.target.style.backgroundColor= "black"; 
} 

let button = document.getElementById("btn"); 
button.onclick = function () { 
    location.reload(); //utilized this method to reset webpage to clear grid 
}
    
    
makeRows(16, 16); 












    



