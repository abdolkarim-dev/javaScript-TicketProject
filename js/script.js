//  (: همین الان شروع کنین و بنویسین
// چششششم
//اشتباه من این بود که میخاستم با فور ایچ روی ابجکت ها حرکت کنم درحالی که نیاز به یک ارایه داشت
let cities = { 
    Iran : ['isfahan','shiraz','tehran'],
    US : ['new york','los angeles','san antonio'],
    Canada : ['toronto','vancouver','montreal']
}

let selectOptionCities = document.getElementById('countrySelect')
let selectOptionCitiesResult = document.getElementById('citySelect')
function countrySelectFunction(){ 
    selectOptionCitiesResult.innerHTML = ''
    let selectedCountry = selectOptionCities.value 
    if (cities[selectedCountry]){
        cities[selectedCountry].forEach(function(city){
           selectOptionCitiesResult.innerHTML += '<option>'+city+'</option>'
        });
    }else{
        selectOptionCitiesResult.innerHTML = '<option> Plese Select Cities </option>'
    }
}
