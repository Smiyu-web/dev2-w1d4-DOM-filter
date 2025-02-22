//get result element
const result = document.querySelector('ul');
//get input filter element
const input = document.querySelector('input');
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);
    filterData(e.target.value)
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''
    
    for (const r of results) {

        // -------------------------------------------------------

        // const li = document.createElement('li');
        // const img = document.createElement('img');
        // const div = document.createElement('div');
        // const name = document.createElement('h4');
        // const location = document.createElement('p');
        // div.classList.add('user-info');

        // img.src = r.picture.thumbnail;
        // name.innerText = r.name.first;
        // location.innerText = r.location.city;

        // result.appendChild(li);

        // li.appendChild(img);
        // li.appendChild(div);
        // div.appendChild(name);
        // div.appendChild(location);

        // listItems.push(li);

        // -------------------------------------------------------

        const li = document.createElement('li');
        li.innerHTML = `
            <img src=${r.picture.thumbnail} />
            <div class="user-info">
              <h4>${r.name.first}</h4>
            <p>${r.location.city}</p>
            </div>
        `;

        result.appendChild(li);

        listItems.push(li);
    }
}



function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            //remove the class of .hide
            item.classList.add('hide');
        } else {
            //add the class of .hide
            item.classList.remove('hide');
        }
    })
}