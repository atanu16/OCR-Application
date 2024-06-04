import { useState } from 'react';
import Tesseract from 'tesseract.js';
import TextEditor from './TextEditor';
import './style.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setExtractedText('');
      extractText(file);
    }
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
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  };

  return (
    <div className="upload-container">
      <input  id="cover-image" type="file" onChange={handleImageChange} accept="image/*" className="file-input"/>
      {isLoading && <p className="loading-text">Loading...</p>}
      <div className="image-container">
        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
      </div>
      <div className="text-editor-container">
        {extractedText && <TextEditor initialText={extractedText} />}
      </div>
    </div>
  );
};

export default ImageUpload;
