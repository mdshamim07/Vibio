export default function getFormData(e) {
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  return data;
}
