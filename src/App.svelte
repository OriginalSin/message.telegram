<script>
	import config from './config.js';

	export let name;

	let prefix = 'https://api.telegram.org/bot';
	let sendMe = (out) => {
		fetch(prefix + config.telegram.token + '/sendMessage', {
			method: 'POST',
			mode: 'cors',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: config.telegram.chat,
				text: JSON.stringify(out)
			})
		})
			.then((req) => req.json())
			.then((json) => {
				console.log(json)
			})
			.catch(console.warn);
	};
	let checkForm = (ev) => {
		let target = ev.target,
			inputs = target.parentNode.parentNode.getElementsByClassName('form__input'),
			out = {},
			error = false;
		for (let i = 0, len = inputs.length; i < len; i++) {
			let it = inputs[i],
				name = it.name,
				zn = it.value;
			if (zn) {
				it.classList.remove('error');
				out[name] = zn;
			} else {
				it.classList.add('error');
				error = true;
			}
		}
		if (error) {
		} else {
			sendMe(out);
		}
		// console.log('checkForm', out);
	};
	
</script>

<style>
	.error {
		background-color: red;
	}
	.wrapper, .form__container, .form__title, .form__inputs, .form__buttons {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.form__buttons button {
		margin: 20px;
		background-color: cyan;
	}
	@media (max-width: 1024px) {
		.form__container {
			padding: 30px 20px 20px 20px;
		}
	}
	.form__container {
		background-color: aquamarine;
		padding: 45px 20px 20px 20px;
		flex-direction: column;
	}
	.form__inputs {
		flex-direction: column;
		width: 100%;
		z-index: 2;
	}
	.form__input {
		color: #455a64;
		font-family: 'roboto', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		width: 100%;
		border: 1px solid transparent;
		border-radius: 5px;
		padding: 15px 20px;
		margin-bottom: 18px;
		font-size: 14px;
		transition: 0.2s;
	}
</style>

<fieldset>
	<legend>Связаться со мной</legend>
	<div class="form__container">
		<input class="form__input" type="text" name="name" placeholder="Имя" required="" />
		<input class="form__input" type="email" name="email" placeholder="Email" required="" />
		<textarea class="form__input form__message" name="mess" placeholder="Ваше сообщение" required=""></textarea>
	</div>
	<div class="form__buttons">
		<button class="form__submit error" on:click={checkForm}>Отправить</button>
		<button class="form__clean">Очистить</button>
	</div>
</fieldset>