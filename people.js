function fetchPeople(){
    const apiUrl = `https://starwars-databank-server.vercel.app/api/v1/characters`;
    fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON response
            })
            .then(data => {
                
                console.log(data.data)
                
                data.data.sort().forEach(ok =>{
                    dataListElement = document.getElementById("list")
                    subList = document.createElement('ul')

                    character = document.createElement('li')
                    character.innerHTML = `<h3>${ok.name}</h3>`
                    dataListElement.appendChild(character);
                    dataListElement.appendChild(subList);
                    description = document.createElement('li')
                    description.innerHTML = ok.description
                    img = document.createElement('img')
                    img.src = ok.image
                    subList.appendChild(description)
                    subList.appendChild(img)
                })
                
                

              
                
                // data.forEach(item => {
                //     const listItem = document.createElement('li');
                //     listItem.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
                //     dataListElement.appendChild(listItem);
                // });
            })
            .catch(error => {
                // Hide loading and show error message
                
                console.error('Fetch error: ', error);
            });
        
}
fetchPeople();