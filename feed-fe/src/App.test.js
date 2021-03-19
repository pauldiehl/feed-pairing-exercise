import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('empty test', async () => {
  fetch.resetMocks();
  fetch.mockResponseOnce("")
  render(<App />);

});

