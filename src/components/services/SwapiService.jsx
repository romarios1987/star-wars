export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const data = await fetch(`${this._apiBase}${url}`)
          .then(res => res.json())
          .catch(err => {
            console.log('Error: ', err)
          });
    return data
  }

  // get all people
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  // get people by ID
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };


  // get all planets
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  // get planet by ID
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  // get all starships
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  // get starship by ID
  getStarships = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };


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
  };


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