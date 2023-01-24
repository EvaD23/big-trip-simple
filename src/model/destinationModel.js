import { destinations } from '../mock/data.js';

export default class DestinationsModel {
  #destinations = [...destinations];

  get destinations() {
    return this.#destinations;
  }

  getById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }

}
