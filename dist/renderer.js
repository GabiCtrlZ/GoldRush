const source = $('#template').html()
const template = Handlebars.compile(source)

class renderer{
    constructor() {
        
    }
    renderData(allCityData){
        for(let city of allCityData){
            const newHtml = template(city)
            $('body').append(newHtml)
        }
    }
}