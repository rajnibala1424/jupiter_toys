import 'dotenv/config';

export function getCredentials(): { username: string; password: string } {
  const username = process.env.JUPITER_USERNAME;
  const password = process.env.JUPITER_PASSWORD;

  if (!username || !password) {
    throw new Error(
      'Missing JUPITER_USERNAME or JUPITER_PASSWORD. Add them to e2e/.env.',
    );
  }

  return { username, password };
}