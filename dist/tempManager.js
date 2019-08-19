class TempManager{
    constructor(){
        this.cityData = []
    }
    async getDataFromDB(){
        const data = await $.get('cities')
        for (let d of data){
            const city = await $.get('city/' + d.name)
            this.cityData.push(city)
        }
        return this.cityData
    }
    async getCityData(cityName){
        const data = await $.get('city/' + cityName)
        this.cityData.push(data)
        return data
    }
    saveCity(cityName){
        const promise = $.post('city', {name: cityName})
        promise.catch(function(err){console.log(err)})
    }
    removeCity(cityName){
        const promise = $.ajax({
            type: "DELETE",
            url: `city/${cityName}`
        })
        promise.catch(function(err){console.log(err)})
    }
}