// const API_key = '3e7cf2282e92b607e7bd2293d7a6e5e0';

// http://api.openweathermap.org/data/2.5/weather?id=ID_524901&lang=ru&appid=3e7cf2282e92b607e7bd2293d7a6e5e0

// function getGeo (name){
// 	const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=sankt-petersburg&limit=5&appid=${API_key}`;
// }


//Получаем прогноз в массив data
fetch('http://api.openweathermap.org/data/2.5/weather?id=498817&lang=ru&appid=3e7cf2282e92b607e7bd2293d7a6e5e0').then(function (resp) { return resp.json() }).then(function (data) {
	//добавляем название города
	// document.querySelector('.weather__city').textContent = data.name;
	//data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
	document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
	// //Добавляем описание погоды
	// document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
	//Добавляем иконку погоды
	// document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
	.catch(function () {
		//Обрабатываем ошибки
	});

fetch('http://api.openweathermap.org/data/2.5/weather?id=162183&lang=ru&appid=3e7cf2282e92b607e7bd2293d7a6e5e0').then(function (resp) { return resp.json() }).then(function (data) {
	//добавляем название города
	// document.querySelector('.weather__city').textContent = data.name;
	//data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
	document.querySelector('.weather__forecast_ashgabat').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
	// //Добавляем описание погоды
	// document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
	//Добавляем иконку погоды
	// document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
	.catch(function () {
		//Обрабатываем ошибки
	});