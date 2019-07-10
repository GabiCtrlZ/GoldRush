class TempManager{
    constructor(){
        this.cityData = []
    }
    getDataFromDB(){
        const promise = $.get('cities')
        promise.then((data) =>{
            this.cityData = data
        })
    }
}