// utils/handleImageUpload.js
export const handleImageUpload = (
  file,
  setError,
  setFormData,
  setImagePreview
) => {
  const maxSize = 10 * 1024 * 1024;

  if (file && file.size > maxSize) {
    setError("File size exceeds the limit of 10 MB.");
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  } else {
    setError("");
    setFormData((prev) => ({ ...prev, image: file }));

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  }
};
