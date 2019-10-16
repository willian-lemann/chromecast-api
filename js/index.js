
let iconWeather;
let degreesWeather;
let img = document.getElementById('img');
let icon = document.getElementById('icon');
let degrees = document.getElementById('degrees');
let items;








function changeImages() {

    axios.get('https://restcountries.eu/rest/v2/all')
        .then((res) => {

            let countriesArray = [];
            res.data.map(item => {
                countriesArray.push(item.name)
            });

            axios.get(`https://api.unsplash.com/search/photos?query=${countriesArray[Math.round(Math.random() * 100)]}&client_id=2d888541fe80477a46b3c0888a8866a5c3fe7dcc3470346a633a2a6478990956`)
                .then((res) => {
                    let array = [];
                    let data = res.data.results;
                    data.forEach(items => {
                        array.push(items.urls.full)
                    });
                    img.src = array[0];
                    setInterval(() => {
                        img.src = array[Math.round(Math.random() * 9)];
                    }, 60000);

                }).catch((err) => {
                    console.log(err);
                });

        })
        .catch((err) => {
            console.log(err);
        });


    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Porto%20Alegre&APPID=5eb7633b62139baf8138f658fed5f304')
        .then(function (res) {

            iconWeather = res.data.weather[0].icon;
            degreesWeather = `${Math.round(res.data.main.temp - 273)}°C`;

        }).catch(function (error) {
            console.log('chegou aqui');
        })

    setInterval(() => {

        icon.src = `http://openweathermap.org/img/wn/${iconWeather}@2x.png`;
        degrees.innerText = degreesWeather;
    }, 1000);
}

let relogio = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seg = date.getSeconds();

    let hours = `${hour}:${min}`;

    document.getElementById('timer').innerHTML = hours;
}

let mostraRelogio = setInterval(relogio, 1000);

changeImages()
