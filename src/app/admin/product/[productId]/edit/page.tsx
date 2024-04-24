import React from 'react';
import { Product } from '@prisma/client';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import ProductEditForm from '@/components/ProductEditForm';

interface ProductEditPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductEditPage(props: ProductEditPageProps) {
  const productId = parseInt(props.params.productId);

  let product: Product | null = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return notFound();
  }

  const plainProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price.toString(),
    quantity: product.quantity,
    imageUrl: product.imageUrl,
    status: product.status,
  };

  return (
    <>
      <ProductEditForm product={plainProduct} />
    </>
  );
}
