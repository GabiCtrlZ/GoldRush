const tempManager = new TempManager()
const renderer = new Renderer()

class Controller {
    constructor() {
    }

    async loadPage(tempManager) {
        const allCityData = await tempManager.getDataFromDB()
        renderer.renderData(allCityData)
    }
    async handleSearch(tempManager) {
        const input = $('input').val()
        const city = await tempManager.getCityData(input)
        renderer.renderOne(city)
    }
}
const controller = new Controller()
controller.loadPage(tempManager)

$('#button').on('click', function () {
    controller.handleSearch(tempManager)
})

$('body').on('click', '.save_button', function () {
    let cityName = $(this).parent().siblings('.name').text().replace(" ", "-")
    if (cityName == "Tel-Aviv-Yafo") {
        cityName = 'Tel-Aviv'
    }
    if ($(this).attr('class') == "save_button fa fa-plus-square") {
        console.log('we are saving')
        tempManager.saveCity(cityName)
        $(this).attr('class', 'save_button fa fa-minus-square')
    }
    else {
        console.log('we are removing')
        tempManager.removeCity(cityName)
        $(this).attr('class', 'save_button fa fa-plus-square')
    }
})
