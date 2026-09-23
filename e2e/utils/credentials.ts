import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.cred') });

export function getCredentials(): { username: string; password: string } {
  const username = process.env.JUPITER_USERNAME;
  const password = process.env.JUPITER_PASSWORD;

  if (!username || !password) {
    throw new Error(
      'Missing JUPITER_USERNAME or JUPITER_PASSWORD. Add them to e2e/.env.cred.',
    );
  }

  return { username, password };
}