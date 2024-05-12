document.querySelectorAll(".tocalculate").forEach(element => {
    element.addEventListener("click", () => {
        const toDisplay = document.getElementsByClassName("calculator-screen")

        toDisplay[0].value += element.innerText
        document.querySelector(".equalbt").addEventListener("click", () => {
            const result = eval(toDisplay[0].value)
            toDisplay[0].value=result
        })
        document.querySelector(".ac-but").addEventListener("click",()=>{
            toDisplay[0].value=''
         })


    });
});


