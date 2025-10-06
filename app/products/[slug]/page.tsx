import { products, getProductBySlug } from '@/lib/products-data';
import ProductDetailClient from './product-detail-client';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productData = {
    ...product,
    icon: undefined,
  };

  return <ProductDetailClient product={productData} slug={params.slug} />;
}
