import { hash } from 'bcryptjs';

export async function hashPassword(password) {
   const hashedPassord =  await hash(password, 12);
   return hashedPassord;
}