const radioBtn = document.querySelectorAll(".radio input");
const inputs = document.querySelectorAll(".input");
const form = document.querySelector(".form");
const firstName = document.getElementById("0");
const lastName = document.getElementById("1");
const email = document.getElementById("2");
const radio1 = document.getElementById("3");
const radio2 = document.getElementById("4");
const message = document.getElementById("5");
const check = document.getElementById("6");
const succesMessage = document.querySelector(".succes-message-container");


radioBtn.forEach((radio, index) => {
	radio.addEventListener("focus", (e) => {
		const children = radio.parentNode.parentNode.children;

		if (index === 0) {
			children[1].classList.add("selected");
			children[2].classList.remove("selected");
		} else {
			children[2].classList.add("selected");
			children[1].classList.remove("selected");
		}
	});
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validateForm();
});

inputs.forEach(input => {
	input.addEventListener("cut" , (e) => {
		e.preventDefault()
	});
	input.addEventListener("copy" , (e) => {
		e.preventDefault()
	});
	input.addEventListener("paste" , (e) => {
		e.preventDefault()
	});
})


const setError = (element, message) => {
    if (element === radio1) {
        const errorContainer = element.parentNode.parentNode.querySelector("p");
		errorContainer.innerText = message;
	} else {
        element.classList.add("error");
        const errorContainer = element.parentNode.querySelector("p");
		errorContainer.innerText = message;
	}
};


const setSucces = (element) => {
	if (element === radio1) {
        const errorContainer = element.parentNode.parentNode.querySelector("p");
		errorContainer.innerText = "";
	} else {
        element.classList.remove("error");
        const errorContainer = element.parentNode.querySelector("p");
		errorContainer.innerText = "";
	}
};

const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email.toLowerCase())

}

const validateForm = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();
	const checkValue = check.checked;
	const radio1Value = radio1.checked;
	const radio2Value = radio2.checked;

    let isValid = true;

	if (firstNameValue === "") {
		setError(firstName, "This field is required");
        isValid = false;
	} else {
		setSucces(firstName);
	}

	if (lastNameValue === "") {
		setError(lastName, "This field is required");
        isValid = false;
	} else {
		setSucces(lastName);
	}

	if (emailValue === "") {
		setError(email, "This field is required");
        isValid = false;
	}else if(!isValidEmail(emailValue)) {
		setError(email, "Please enter a valid email address");
        isValid = false;
    } 
    else {
		setSucces(email);
	}

	if (messageValue === "") {
		setError(message, "This field is required");
        isValid = false;
	} else {
		setSucces(message);
	}
	if (!checkValue) {
		setError(check, "To submit this form, please consent to being contacted");
        isValid = false;
	} else {
		setSucces(check);
	}
	if (!radio1Value && !radio2Value) {
		setError(radio1, "Please select a query type");
        isValid = false;
	}else {
        setSucces(radio1)
    }

    if(isValid) {
        console.log("succes");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";
        radio1.checked = false;
        radio2.checked = false;
        radio1.parentNode.classList.remove("selected");
        radio2.parentNode.classList.remove("selected");
        check.checked = false;
		succesMessage.classList.add("show-succes");
		setTimeout(() => {
		succesMessage.classList.remove("show-succes");
		},3000)
    }else {
        console.log("error")
    }

};
