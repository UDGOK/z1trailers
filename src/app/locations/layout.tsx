import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Operational Grid | Z1 Trailers',
  description: 'Z1 Trailers maintains 24/7 AI-monitored surveillance and LiFePO4 supplemental power across the entire US tactical matrix.',
  alternates: {
    canonical: '/locations'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
