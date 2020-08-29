const jokeBtn = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

const buttonText = [
	'Ugh.',
	'🤦🏻‍♂️',
	'omg dad.',
	'you are the worst',
	'seriously',
	'stop it.',
	'please stop',
	'that was the worst one',
];

function randomItemFromArr(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item === not) {
		return randomItemFromArr(arr, not);
	}
	return item
}

async function fetchJoke() {
	const res = await fetch('https://icanhazdadjoke.com', {
		headers: {
			Accept: 'application/json',
		}
	});	
	const data = await res.json();
	return data;
}
fetchJoke();

async function handleClick() {
	const { joke } = await fetchJoke();
	jokeHolder.textContent = joke;

	jokeBtn.textContent = randomItemFromArr(buttonText, jokeBtn.textContent);
}

jokeBtn.addEventListener('click', handleClick);