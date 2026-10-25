import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { expect, it } from 'vitest';
import App from './App';

// Tells React this is a test environment, so act() flushes updates without warnings.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => root.render(<App />));
  expect(div.querySelector('.App-title').textContent).toBe('Welcome to React');
  act(() => root.unmount());
});
