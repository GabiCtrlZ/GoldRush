const source = $('#template').html()
const template = Handlebars.compile(source)

class Renderer{
    constructor() {
        
    }
    renderData(allCityData){
        for(let city of allCityData){
            this.renderOne(city)
        }
        $('.save_button').attr('class', 'save_button fa fa-minus-square')
    }
    renderOne(city){
        const newHtml = template(city)
        $('body').append(newHtml)
    }
}