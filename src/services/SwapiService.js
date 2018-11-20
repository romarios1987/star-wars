export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

// async function
    async getResource(url) {
        const data = await fetch(`${this._apiBase}${url}`)
            .then(res => res.json())
            .catch(err => {
                console.log('Error: ', err)
            });
        return data
    }

    // get all people
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    // get people by ID
    getPerson(id) {
        return this.getResource(`/people/${id}`)
    }


    // get all planets
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    // get planet by ID
    getPlanet(id) {
        return this.getResource(`/planets/${id}`)
    }

    // get all starships
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    // get starship by ID
    getStarships(id) {
        return this.getResource(`/starships/${id}`)
    }
}
