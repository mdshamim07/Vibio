import bcrypt from "bcrypt";
export default async function hashedPassword(plainText) {
  const response = await bcrypt.hash(plainText, 10);
  return response;
}
