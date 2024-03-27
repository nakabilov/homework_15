
document.addEventListener('DOMContentLoaded', () => {


    const BASE_URL1 = 'https://restcountries.com/v3.1/';
    const name = document.querySelector('#name');
    const region = document.querySelector('#region');
    const subregion = document.querySelector('#subregion');
    const capital = document.querySelector('#capital');
    const flagImg = document.querySelector('img');
    const error = document.querySelector('.error');
    const inform = document.querySelector('.information__div');
    

    const searchInput = document.querySelector('#country-name');

    const searchButton = document.querySelector('#show');

    const searchCountry = async(countryValue) => {

        try {

            const response = await fetch(`${BASE_URL1 + 'name/'+countryValue}?fields=name,region,subregion,capital,flags`);
            if(response.status >= 400){
                error.style.display = 'block';
                inform.style.display = 'none';
            }else{
                error.style.display = 'none';
                inform.style.display = 'block';
            }
            const data = await response.json();
            name.innerHTML = data[0].name.common;
            region.innerHTML = data[0].region;
            subregion.innerHTML = data[0].subregion;
            capital.innerHTML = data[0].capital;
            flagImg.src = data[0].flags.png;
            
            
        } catch (error) {
            console.log(error);
        }
        
    }
    searchButton.addEventListener('click', ()=> {
        const value = searchInput.value;
        searchCountry(value);
    })

});

