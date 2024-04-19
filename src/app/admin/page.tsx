import { db } from '@/db';
import { Product } from '@prisma/client';
import ProductFilters from '@/components/ProductFilters';
import ProductListTable from '@/components/ProductListTable';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
  imageUrl: string;
}

export default async function AdminDashboardPage() {
  const products: Product[] = await db.product.findMany();

  const productData: ProductProps[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    quantity: product.quantity,
    imageUrl: product.imageUrl,
    status: product.status,
  }));

  return (
    <>
      <ProductFilters />
      <ProductListTable products={productData} />
    </>
  );
}
