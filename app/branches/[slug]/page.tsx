import { branches, getBranchBySlug } from '@/lib/branches-data';
import BranchDetailClient from './branch-detail-client';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export default function BranchDetailPage({ params }: { params: { slug: string } }) {
  const branch = getBranchBySlug(params.slug);

  if (!branch) {
    notFound();
  }

  return <BranchDetailClient branch={branch} />;
}
