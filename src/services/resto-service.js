export default class RestoService {
  _baseUrl = 'https://restoapp2021.herokuapp.com/api';

  async getMenuItems() {
    let response = await fetch(`${this._baseUrl}/menu`);
    if(!response.ok) {
      throw new Error(`Could not fetch ${this._baseUrl}/menu`)
    }
    return await response.json()
  }
}