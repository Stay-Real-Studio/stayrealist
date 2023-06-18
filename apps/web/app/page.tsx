'use client';

import { Button } from 'ui';

import styles from '../styles/index.module.css';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const SrlMap: any = dynamic(() => import('../components/map.component'), {
  ssr: false,
});

export default function Web() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <h1>Web</h1>
        <Button onClick={() => console.log('Pressed!')} text="Boop" />
        <SrlMap />
      </div>
    </QueryClientProvider>
  );
}
