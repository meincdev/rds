'use client';

import React from 'react';
import { RdsButton } from '@meinc/rds-ui-core';

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>RDS Example App</h1>
      <p>This app validates that @meinc/* packages work correctly as a consumer.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <RdsButton>Default</RdsButton>
          <RdsButton variant="secondary">Secondary</RdsButton>
          <RdsButton variant="outline">Outline</RdsButton>
          <RdsButton variant="ghost">Ghost</RdsButton>
          <RdsButton variant="destructive">Destructive</RdsButton>
          <RdsButton variant="play">Play</RdsButton>
          <RdsButton variant="stop">Stop</RdsButton>
          <RdsButton variant="transport" size="transport">
            T
          </RdsButton>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Button States</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <RdsButton disabled>Disabled</RdsButton>
          <RdsButton loading>Loading</RdsButton>
        </div>
      </section>
    </main>
  );
}
