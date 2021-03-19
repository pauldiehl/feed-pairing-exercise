import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('enter text and click save should make POST call to /api/posts with correct body', async () => {
  render(<App />);
  const sampleText = "some test entry";
  const samplePayload = { post: sampleText };
  const text = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  userEvent.type(text, sampleText);
  userEvent.click(button);
  await waitFor( () => expect(fetch.mock.calls[0][1].method).toEqual('POST'));
  expect(fetch.mock.calls[0][0]).toEqual('/api/posts');
  expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify(samplePayload));
});


