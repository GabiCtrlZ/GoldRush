const source = $('#template').html()
const template = Handlebars.compile(source)

class Renderer{
    constructor() {
        
    }
    renderData(allCityData){
        for(let city of allCityData){
            const newHtml = template(city)
            $('body').append(newHtml)
        }
    }
    renderOne(city){
        const newHtml = template(city)
        $('body').append(newHtml)
    }
}