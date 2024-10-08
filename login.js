'use strict'
// console.log(accounts);
//----------------HTML ELEMENTS----------------//
const app = document.querySelector('.app');
//--Landing Section--//
const landingContainer = document.querySelector('.landing-container');
const btnLoginWelcome = document.getElementById('loginBtn');
const btnCreateAccountWelcome = document.getElementById('createAccountBtn');

//--Login Section--//
const loginSection = document.getElementById('loginSection');
const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

//--Create Account Section--//
const createAccountSection = document.getElementById('createAccountSection');
const btnCreateAccount = document.querySelector('.create-account__btn');
const inputCreateAccountUsername = document.querySelector('.create-account__input--user');
const inputCreateAccountPassword = document.querySelector('.create-account__input--password');
const inputCreateAccountConfirmPassword = document.querySelector('.create-account__input--confirm-password');

//----------------FUNCTIONS----------------//
const createAccount = function (username, pin)
{
	const newUser = {
		username: username,
		pin: pin,
	};
	accounts.push(newUser);
	localStorage.setItem('currentAccount', JSON.stringify(newUser));
};

//----------------EVENT LISTENERS----------------//
//--Show Login Form--//
btnLoginWelcome.addEventListener('click', () => {
	loginSection.style.display = 'block';
	createAccountSection.style.display = 'none';
	landingContainer.style.display = 'none';
});

//--Show Create Account Form--//
btnCreateAccountWelcome.addEventListener('click', () => {
	createAccountSection.style.display = 'block';
	loginSection.style.display = 'none';
	landingContainer.style.display = 'none';
});

//--Login User--//
btnLogin.addEventListener('click', function(e) {
	e.preventDefault();
	const username = inputLoginUsername.value;
	const pin = inputLoginPin.value;
	currentAccount = accounts.find(acc => acc.username === username)
	if (currentAccount?.pin === Number(pin))
	{
		// console.log(`Current Account: ${currentAccount.username}`);
		localStorage.setItem('currentAccount', JSON.stringify(currentAccount));
		app.style.display = 'block';
		landingContainer.style.display = 'none';
		loginSection.style.display = 'none';
		// window.location.assign('index.html');
		console.log('Logged In!')
	}
	// window.location.href = 'index.html';
});

//--Create Account--//
btnCreateAccount.addEventListener('click', function(e) {
	e.preventDefault();
	const username = inputCreateAccountUsername.value;
	const pin = inputCreateAccountPassword.value;
	const confirmPin = inputCreateAccountConfirmPassword.value;

	if (username === '' || pin === '' || confirmPin === '')
		alert('Fields cannot be empty');
	else if (accounts.some(acc => acc.username === username))
		alert('User already exists!');
	else if (pin !== confirmPin)
		alert('Passwords do not match!')
	// else if (pin.length < 4)
	// 	alert('Password too short!')
	else
	{
		console.log(accounts);
		createAccount(username, pin);
		app.style.display = 'block';
		landingContainer.style.display = 'none';
		createAccountSection.style.display = 'none';
		console.log(accounts);

		// window.location.assign('index.html');
	}

});
