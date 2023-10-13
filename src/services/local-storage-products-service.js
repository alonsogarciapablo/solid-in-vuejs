export default class LocalStorageProductsService {
  create(product) {
    const newProducts = [
      ...this.getAll(),
      product
    ];
    localStorage.setItem('products', JSON.stringify(newProducts));
    console.log(this.getAll());
  }

  getAll() {
    return JSON.parse(localStorage.getItem('products'));
  }

  deleteAll() {
    localStorage.setItem('products', JSON.stringify([]));
  }

  search(searchQuery) {
    return this.getAll().filter(product => product.name.match(searchQuery));
  }
}
