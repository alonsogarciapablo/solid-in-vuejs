export default class LocalStorageProductsService {
  getAll() {
    return JSON.parse(localStorage.getItem('products'));
  }

  search(searchQuery) {
    return this.getAll().filter(product => product.name.match(searchQuery));
  }
}
