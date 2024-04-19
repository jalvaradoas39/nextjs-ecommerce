export interface ProductData {
  name: string;
  description: string;
  price: string;
  quantity: number;
  status: string;
  imageUrl: string;
}

export enum ProductStatus {
  IN_STOCK = 'IN_STOCK',
  LOW_STOCK = 'LOW_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
}
