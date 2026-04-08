import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware Matrix | Z1 Trailers',
  description: 'Identify the exact surveillance payload required to secure your operational perimeter.',
  alternates: {
    canonical: '/security-trailers'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
