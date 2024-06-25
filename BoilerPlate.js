window.addEventListener("DOMContentLoaded",() =>{

    addAllCss(["BoilerPlate.css", "GlobalBoilerPlate.css", "Responsive.css", "style.css", "UtilityBoilerPlate.css"]);
    
    // let t= createElement("table");
    // t.setAttribute("border","2");
    // t.innerText="This should be a table";
    // document.querySelector("body").appendChild(e);
    // t.innerHTML+="<tr><td>Table data</td><td>Table data</td></tr>";
});

function addAllCss(arr){

    arr.forEach(el => {
        addCssFile(el);
    });
}

function addCssFile(fname){
    
    let el= document.createElement("link");
    el.setAttribute("rel","stylesheet");
    el.setAttribute("href",fname);
    window.querySelector("head").appendChild(el);
}