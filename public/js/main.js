const  submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const middle_layer=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval===""){
        city_name.innerHTML=`please write the name before searching`;
        middle_layer.classList.add('data_hide');
    }else {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=1869786ff989056a42185caa3b0b8814`
            const response=await fetch(url);
            const data= await response.json();
            // console.log(data);
            const arrData=[data];
            city_name.innerHTML=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerHTML=arrData[0].main.temp;
            const tempmood=arrData[0].weather[0].main;
            if(tempmood=="Clear"){
                temp_status.innerHTML=" <i class='fas fa-sun' style='color:yellow'></i>";
            }else if(tempmood=="Clouds"){
                temp_status.innerHTML=" <i class='fas fa-cloud' style='color:black;'></i>";
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML=" <i class='fas fa-cloud-rain' style='color:black;'></i>";
            }else {
                temp_status.innerHTML=" <i class='fas fa-sun' style='color:yellow'></i>";
            }
            
            middle_layer.classList.remove('data_hide');

        }catch{
            city_name.innerHTML=`please the enter city name properly`;
            middle_layer.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click',getInfo);



var date=new Date();


const Dayarray=new Array(7);
Dayarray[0]="Sunday";
Dayarray[1]="Monday";
Dayarray[2]="Tuesday";
Dayarray[3]="Wednesday";
Dayarray[4]="Thursday";
Dayarray[5]="Friday";
Dayarray[6]="Saturday";

const Montharray=new Array(7);
Montharray[0]="January";
Montharray[1]="Febuary";
Montharray[2]="March";
Montharray[3]="April";
Montharray[4]="May";
Montharray[5]="June";
Montharray[6]="July";
Montharray[7]="August";
Montharray[8]="September";
Montharray[9]="Octomber";
Montharray[10]="November";
Montharray[11]="December";

const day=document.getElementById('day');
const today_date=document.getElementById('today_date');

day.innerHTML=`${Dayarray[date.getDay()]}`
today_date.innerHTML=`${date.getDate()} ${Montharray[date.getMonth()]}`
