export default function generateOtp() {
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
  }
  return code;
}
