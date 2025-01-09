export default function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]); // Get Base64 part
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
