export default class RestoService {
  _baseUrl = 'http://localhost:3001';

  async getMenuItems() {
    let response = await fetch(`${this._baseUrl}/menu`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${this._baseUrl}/menu`)
    }
    return await response.json()
  }
}