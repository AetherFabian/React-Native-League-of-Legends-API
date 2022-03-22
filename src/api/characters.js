const URL = "http://ddragon.leagueoflegends.com/cdn/12.5.1/"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}data/en_US/champion.json`);
        const response = await request.json();
        return response.data;
    } catch (err) {
        throw Error(err);
    }
}

export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}data/en_US/champion/${id}.json`);
        const response = await request.json();
        return response.data;
    } catch (err) {
        throw Error(err);
    }
}
