class TempManager{
    constructor(){
        this.cityData = []
    }
    getDataFromDB(){
        const promise = $.get('cities')
        promise.then((data) =>{
            this.cityData = data
        })
        .catch(function(err){console.log(err)})
    }
    getCityData(cityName){
        const promise = $.get('city/' + cityName)
        promise.then(data => {
            this.cityData.push(data)
        })
        .catch(function(err){console.log(err)})
    }
    saveCity(cityName){
        const data = this.cityData.find(x => x.name == cityName)
        const promise = $.post('city', data)
        promise.catch(function(err){console.log(err)})
    }
}