let iconWeather;
let degreesWeather;
let img = document.getElementById('img');
let icon = document.getElementById('icon');
let degrees = document.getElementById('degrees');

function changeImages() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=london&APPID=5eb7633b62139baf8138f658fed5f304')
        .then(function (res) {

            iconWeather = res.data.weather[0].icon;
            degreesWeather = res.data.main.temp;
            console.log(degrees)

        }).catch(function (error) {
            console.log('chegou aqui')
        })
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 3);

        img.src = `/assets/imagem${randomNumber}.jpg`;
        icon.src = `http://openweathermap.org/img/wn/${iconWeather}@2x.png`;
        degrees.innerText = degreesWeather;
    }, 1000);
}

Date