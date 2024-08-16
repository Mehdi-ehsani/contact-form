const radioBtn = document.querySelectorAll(".radio input");

radioBtn.forEach((radio , index)=> {
    radio.addEventListener("focus" , (e) => {
        const children = radio.parentNode.parentNode.children;

        if(index === 0) {
            children[1].classList.add("selected")
            children[2].classList.remove("selected")
        }else {
            children[2].classList.add("selected")
            children[1].classList.remove("selected")
        }
    })
})