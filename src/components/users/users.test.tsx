import { render, screen, waitFor } from '@testing-library/react';
import Users from './users';
import { rest } from 'msw';
import { SetupServer, setupServer } from 'msw/node';
import Skills from '../skills/skills';
import Application from '../application/application';

describe('Users', () => {
  let server: SetupServer;

  beforeAll(() => {
    server = setupServer(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
          //  ctx.status(200),
          ctx.json([
            { name: 'Bruce Wayne' },
            { name: 'Clark Kent' },
            { name: 'Princess Diana' },
          ])
        );
      }),
    );
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  test('should show Hello world', async () => {
    render(<Application />);
    // Wait for the text "Hello world" to appear
    await (() => {
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    });
  });

  
  test('renders error message when fetching fails', async () => {
    // Mock server response to simulate a failed request
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(500)); // Simulate server error
      })
    );

    render(<Users />);

    // Assert that error message is rendered
    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});
