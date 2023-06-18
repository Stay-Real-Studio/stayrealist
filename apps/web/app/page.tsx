'use client';

import { Button } from 'ui';

import styles from '../styles/index.module.css';
import dynamic from 'next/dynamic';

const SrlMap = dynamic(() => import('../components/map.component'), {
  ssr: false,
});

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log('Pressed!')} text="Boop" />
      <SrlMap />
    </div>
  );
}
