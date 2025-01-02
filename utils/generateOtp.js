export default function generateOtp() {
  const length = 6; // Desired length of the OTP
  let code = "";

  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
  }

  // Ensure the OTP is exactly 6 characters long
  return code.padStart(length, "0");
}
