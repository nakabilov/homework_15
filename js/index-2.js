document.addEventListener('DOMContentLoaded', () => {
    
    const BASE_URL = 'https://restcountries.com/v3.1/all';
    const table = document.querySelector('#table');

    
    const restCountry = async() => {
        
        try {
            const response = await fetch(`${BASE_URL}?fields=name,cca2,flags,capital,population`);
            const data  = await response.json();
            for (let i = 0; i < 10; i++) {
                
                const tr = document.createElement('tr')
                const cn = document.createElement('td');
                const td = document.createElement('td')
                const flag = document.createElement('img');
                flag.src = "";
                const name = document.createElement('td');
                const capital = document.createElement('td');
                const population = document.createElement('td');
                cn.innerHTML = data[i].cca2;
                flag.src = data[i].flags.png;
                name.innerHTML = data[i].name.common;
                capital.innerHTML = data[i].capital;
                population.innerHTML = data[i].population;
                table.append(tr)
                td.append(flag);
                tr.append(cn);
                tr.append(td);
                tr.append(name);
                tr.append(capital);
                tr.append(population);
            }
            
        
            
        } catch (error) {
            console.log(error);
        }
    }
    restCountry();
})


