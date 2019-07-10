class TempManager{
    constructor(){
        this.cityData = []
    }
    async getDataFromDB(){
        const data = await $.get('cities')
        console.log(data)
        this.cityData = data
        return this.cityData
    }
    async getCityData(cityName){
        const data = await $.get('city/' + cityName)
        this.cityData.push(data)
        return data
    }
    saveCity(cityName){
        const data = this.cityData.find(x => x.name == cityName)
        const promise = $.post('city', data)
        promise.catch(function(err){console.log(err)})
    }
}