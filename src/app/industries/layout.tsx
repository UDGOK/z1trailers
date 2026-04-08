import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Applications | Z1 Trailers',
  description: 'Our hardware matrix is engineered to dominate specific threat environments. Select your operational sector.',
  alternates: {
    canonical: '/industries'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
