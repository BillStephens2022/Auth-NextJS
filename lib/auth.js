import { hash } from 'bcrypt';

export async function hashPassword(password) {
   const hashedPassord =  await hash(password, 12);
   return hashedPassord;
}