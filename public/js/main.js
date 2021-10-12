const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const data_hide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityval = cityName.value;
    
    if(cityval === ""){
        city_name.innerText = `Please write City Name`;
        data_hide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d4927b739fe1e4827c544781969aae27`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arrData =[data];
        
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;

        const tempMood = arrData[0].weather[0].main;

        //--------conditions to check sunny or cloudy
        if(tempMood == "Clear"){
            temp_status.innerHTML =
            "<i class='fas fa-sun' style='color:orange'></i>";
        }else if(tempMood == "Clouds"){
            temp_status.innerHTML =
            "<i class='fas fa-cloud' style='color:blue'></i>";
        }else if(tempMood == "Rain"){
            temp_status.innerHTML =
            "<i class='fas fa-rain' style='color:white'></i>";
        }else{
                temp_status.innerHTML =
                "<i class='fas fa-sun' style='color:orange'></i>";
        }
            data_hide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Please write correct City Name`;
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);

