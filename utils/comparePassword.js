import bcrypt from "bcrypt";
export default async function comparePassword(plainText, hashPassword) {
  const originalPass = await bcrypt.compare(plainText, hashPassword);
  return originalPass;
}
