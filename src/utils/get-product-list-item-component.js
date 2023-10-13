import ElectronicsProductsListItem from '../components/electronics-products-list-item.vue';
import FashionProductsListItem from '../components/fashion-products-list-item.vue';

export default function getProductListItemComponent(productType) {
  switch(productType) {
    case 'electronics':
      return ElectronicsProductsListItem;
    case 'fashion':
      return FashionProductsListItem;
  }

  throw new Error(`Type: ${productType} is not supported`);
}

