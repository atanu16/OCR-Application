import  { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
const TextEditor = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='editor'>
      <h2>Extracted Text</h2>
      <textarea value={text} onChange={handleTextChange} rows={60} cols={150} />
    </div>
  );
};

TextEditor.propTypes = {
  initialText: PropTypes.string.isRequired
};

export default TextEditor;