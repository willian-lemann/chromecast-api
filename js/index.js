



let iconWeather;
let degreesWeather;
let img = document.getElementById('img');
let icon = document.getElementById('icon');
let degrees = document.getElementById('degrees');
let items;
let config = {
    headers: {
        'Authorization': '563492ad6f917000010000011c8584e295dd4fbe8fc94050b40b07e3'
    }
};







function changeImages() {

    axios.get('https://api.pexels.com/v1/curated?per_page=15&page=1', config)
        .then((res) => {
            items = res.data.photos.url;
        }).catch((err) => {
            console.log(err);
        });

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Porto%20Alegre&APPID=5eb7633b62139baf8138f658fed5f304')
        .then(function (res) {

            iconWeather = res.data.weather[0].icon;
            degreesWeather = res.data.main.temp;

        }).catch(function (error) {
            console.log('chegou aqui');
        })
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 3);

        img.src = `/assets/imagem${randomNumber}.jpg`;
        icon.src = `http://openweathermap.org/img/wn/${iconWeather}@2x.png`;
        degrees.innerText = degreesWeather;
    }, 1000);
}

