import React, { useState, useEffect } from "react";

function ImageUpload({ initialSrc, width, onImageChange }) {
  const [imageSrc, setImageSrc] = useState(initialSrc);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    setImageSrc(initialSrc);
  }, [initialSrc]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setImageSrc(imageUrl);
        onImageChange(imageUrl);
        setUploaded(true); // Set uploaded state to true
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="file-input">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Uploaded"
            width={width}
            style={{
              cursor: "pointer",
              objectFit: "cover",
              borderRadius: uploaded ? "50%" : "0", // Apply circular border radius if uploaded
            }}
          />
        ) : (
          <img
            src={initialSrc}
            alt="Placeholder"
            width={width}
            style={{
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        )}
      </label>
    </div>
  );
}

export default ImageUpload;
