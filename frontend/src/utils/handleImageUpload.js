const handleFileUpload = (file, setError, setFormData, setImagePreview) => {
  const maxSize = 10 * 1024 * 1024; // 10 MB

  if (file && file.size > maxSize) {
    setError("File size exceeds the limit of 10 MB.");
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
    return;
  }

  setError("");
  setFormData((prev) => ({ ...prev, image: file }));

  const reader = new FileReader();
  reader.onloadend = () => setImagePreview(reader.result);
  reader.readAsDataURL(file);
};

export default handleFileUpload;
