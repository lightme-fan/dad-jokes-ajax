import { fetchJoke } from './index.js';
import { jokeHolder, jokeBtn } from './elements.js';
import { randomItemFromArr } from './utils.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
	const { joke } = await fetchJoke();
	jokeHolder.textContent = joke;
	jokeBtn.textContent = randomItemFromArr(buttonText, jokeBtn.textContent);
}
