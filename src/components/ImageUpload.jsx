import { useState } from 'react';
import Tesseract from 'tesseract.js';
import TextEditor from './TextEditor';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    extractText(file);
  };

  const extractText = (file) => {
    setIsLoading(true);
    Tesseract.recognize(
      file,
      'eng',
      { logger: (m) => console.log(m) }
    ).then(({ data: { text } }) => {
      setExtractedText(text);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {isLoading && <p>Loading...</p>}
      {image && <img src={image} alt="Uploaded" />}
      {extractedText && <TextEditor initialText={extractedText} />}
    </div>
  );
};

export default ImageUpload;