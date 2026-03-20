import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { RdsButton } from './button';

describe('RdsButton', () => {
  it('renders with text', () => {
    render(<RdsButton>Click me</RdsButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('has no accessibility violations (default)', async () => {
    const { container } = render(<RdsButton>Click me</RdsButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (disabled)', async () => {
    const { container } = render(<RdsButton disabled>Disabled</RdsButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (loading)', async () => {
    const { container } = render(<RdsButton loading>Loading</RdsButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (play variant)', async () => {
    const { container } = render(
      <RdsButton variant="play" aria-label="Play">
        Play
      </RdsButton>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no accessibility violations (transport variant)', async () => {
    const { container } = render(
      <RdsButton variant="transport" size="transport" aria-label="Stop">
        Stop
      </RdsButton>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
