import redirect from './redirect';

// Test Driven Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirect).toMatchSnapshot(); // Fotografia/Insta/Polaroid
  });
});
