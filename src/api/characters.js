const URL = "https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
