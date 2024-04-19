import { ProductStatus } from '@/types';

export const status_badge_colors: Record<ProductStatus, string> = {
  [ProductStatus.IN_STOCK]: '#009f7f',
  [ProductStatus.LOW_STOCK]: '#9c9b9b',
  [ProductStatus.OUT_OF_STOCK]: '#DB5756',
};

export function getStatusColor(status: ProductStatus): string | null {
  return status_badge_colors[status] || null;
}
