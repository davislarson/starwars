const callStarwars = function () {
    const attributes = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
    let id = Math.ceil(Math.random().toFixed(2)*100)
    console.log(id)
    let chosenAttribute = attributes[Math.floor(Math.random()*attributes.length)]
    console.log(chosenAttribute)
    let extension = `${chosenAttribute}/${id}`;
    apiURL = "https://swapi.dev/api/" + `${extension}`;

    let result = fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        if (data.name != undefined){
        document.getElementById("top").innerHTML = data.name
    } else {
        callStarwars()
    }
    })
}
