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
        return res.results.map(this._transformPerson);
    }

    // get people by ID
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }


    // get all planets
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    // get planet by ID
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    // get all starships
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    // get starship by ID
    async getStarships(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }


    _extractId(item) {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1];
    }


    // data transformation Planet
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }


    // data transformation Starship
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    // data transformation Person
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            mass: person.mass,
            eyeColor: person.eye_color,
            birthYear: person.birth_year,
            gender: person.gender
        }
    }


}
