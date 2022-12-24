export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game =>{
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1){
            return game;
        }
    })
}

export const filterGamesByPlatform = (platFormToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.platforms.forEach(platform =>{
            if(platform.toUpperCase() === platFormToBeSearched.toUpperCase()){
                found = true;
            }
        })
        if(found === true){
            return game;
        }
    })
}

export const filterGamesByGenre = (genreToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.type.forEach(type =>{
            if(type.toUpperCase() === genreToBeSearched.toUpperCase()){
                found = true;
            }
        })
        if(found === true){
            return game;
        }
    })
}