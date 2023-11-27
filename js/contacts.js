const formAdvert = document.getElementById('#form-advert');
const validationAdvert = new JustValidate('#form-advert');


validationAdvert
	.addField('.input-name-advert', [
		{
			rule: 'minLength',
			value: 2,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите имя'
		}
	])
	.addField('.input-mail-advert', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			value: true,
			errorMessage: 'Введите корректный Email',
		},
	])
	.addField('.textarea', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите ваше сообщение',
		}
	])
	
	.onSuccess((event) => {
		console.log('Validation passes and form submitted', event);
		let formData = new FormData(event.target);
		console.log(...formData);
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log('Отправлено');
					window.alert("Сообщение отправленно");
				}
			}
		}
		xhr.open('POST', 'https://argimbaev.ru/mail.php', true);
		xhr.send(formData);
		event.target.reset();
	});