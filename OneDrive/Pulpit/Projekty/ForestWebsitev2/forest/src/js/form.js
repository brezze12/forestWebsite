const username = document.querySelector('.username');
const pass = document.querySelector('.password');
const passRepeat = document.querySelector('.password-repeat');
const email = document.querySelector('.email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};
const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLentgh = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} składa się z ${min} znaków.`
		);
	}
};
const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła nie są takie same');
	}
};

const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'Nieprawidłowy adres email');
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let errorCount = 0;
	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount == 0) {
		popup.classList.add('show-popup');
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, pass, passRepeat, email]);
	checkLentgh(username, 3);
	checkLentgh(pass, 8);
	checkPassword(pass, passRepeat);
	checkMail(email);
	checkErrors();
});

const clearData = (e) => {
	e.preventDefault();

	[username, pass, passRepeat, email].forEach((el) => {
		el.value = '';
		clearError(el);
	});
};

clearBtn.addEventListener('click', clearData);
closeBtn.addEventListener('click', () => {
	popup.classList.remove('show-popup');
});
