const tempManager = new TempManager()
const renderer = new Renderer()

class Controller{
    constructor() {
    }

    async loadPage(tempManager){
        const allCityData = await tempManager.getDataFromDB()
        renderer.renderData(allCityData)
    }
    async handleSearch(tempManager){
        const input = $('input').val()
        const city = await tempManager.getCityData(input)
        renderer.renderOne(city)
    } 
}

const controller = new Controller()
controller.loadPage(tempManager)
$('button').on('click', function(){
    controller.handleSearch(tempManager)
})