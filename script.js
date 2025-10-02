


function fetchMovies() {    

    
    const apiUrl = `https://swapi.dev/api/films`;
    fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON response
            })
            .then(data => {
                
                console.log(data.results)
                
                data.results.sort((a, b) => a.episode_id - b.episode_id).forEach(film =>{
                    dataListElement = document.getElementById("list")
                    subList = document.createElement('ul')

                    episode = document.createElement('li')
                    episode.innerHTML = `<h3>Star Wars: ${film.title}</h3>`
                    dataListElement.appendChild(episode);
                    dataListElement.appendChild(subList);
                    releaseDate = document.createElement('li')
                    releaseDate.innerHTML ="Year: " + film.release_date
                    director = document.createElement('li')
                    director.innerHTML = "Director: " + film.director
                    subList.appendChild(releaseDate)
                    subList.appendChild(director)
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
            i++;
}
fetchMovies();
