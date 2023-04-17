const apikey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa1b8887c0mshaf386a00653035dp1923dcjsncb683b50b327',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const temperature = document.getElementById('temperature');
const mintemp = document.getElementById('mintemp');
const maxtemp = document.getElementById('maxtemp');
const hum = document.getElementById('humidity');
const sunrise1 = document.getElementById('sunrise');
const sunset1 = document.getElementById('sunset');
const feels = document.getElementById('feelslike');
const wind = document.getElementById('windspeed');


const d = document.getElementById('date');

d.innerHTML = new Date();


const city = document.getElementById('cityName');


const search=document.getElementById('search');
 

 console.log(search);
 const  weather=(city)=> {
    cityName.innerHTML = city;
    console.log(city);
    



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, apikey)
	.then(response => response.json())
	.then(data => {
  const {temp , min_temp , max_temp , humidity , sunrise , feels_like , wind_speed , sunset} = data;
temperature.innerHTML=`${temp} &deg;C`;  
mintemp.innerHTML=`${min_temp} &deg;C`; 
maxtemp.innerHTML=`${max_temp} &deg;C`;  
hum.innerHTML =`${humidity} g.m-3`; 
// sunrise1.innerHTML=new Date(sunrise).getHours();  
sunset1.innerHTML=`At ${new Date(sunset).getHours()} Hr`;
sunrise1.innerHTML=`At ${new Date(sunrise).getHours()} Hr`;  

feels.innerHTML=`${feels_like} &deg;C`;  
wind.innerHTML=`${wind_speed} m/s`;  





  })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data');
      });
    }
submit.addEventListener("click", (e)=>{
     e.preventDefault()
  alert("Location change successful");   
weather(search.value)   

});
 weather("Pokhara");