export class Weather{
    
    constructor(city , countryCode){
        this.apikey = '80a6b4c6f0e3ac99f81e29bc7a9d8f19';
        this.city = city;
        this.countryCode = countryCode;
    }
    
    async getWeather(){
        
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
        
    }
    
    changeLocation(city,countryCode){
        this.city = city ;
        this.countryCode = countryCode ;
    }
}

  
