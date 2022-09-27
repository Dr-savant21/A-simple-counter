let count = 0;
let hexColor = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const value = document.querySelector("#value")

const btn = document.querySelectorAll(".btn")

btn.forEach((btn) => {
    btn.addEventListener("click", function(btnFunction) {
        const styles = btnFunction.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--
        } else if(styles.contains("increase")) {
            count++
        }
        else{
            count= 0
        }
        if (count > 0) {
            value.style.color = "green"
        }if(count < 0) {
            value.style.color = "red"
        }
        if(count === 0){
            value.style .color = "black"
        }
        value.textContent = count

        let harsh = "#"
        for (let i=0; i<6; i++){
           let random = Math.floor(Math.random()*hexColor.length)
            harsh += hexColor[random];
        }
        document.body.style.backgroundColor = harsh
    })
   
})