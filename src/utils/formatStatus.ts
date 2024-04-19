import { ProductStatus } from '@/types';

export default function formatStatus(status: string): string {
  let statusValue = '';

  switch (status) {
    case ProductStatus.IN_STOCK:
      statusValue = 'In Stock';
      break;
    case ProductStatus.LOW_STOCK:
      statusValue = 'Low Stock';
      break;
    case ProductStatus.OUT_OF_STOCK:
      statusValue = 'Out of Stock';
      break;
    default:
      statusValue = '';
  }

  return statusValue;
}
