import  { useState } from 'react';
import PropTypes from 'prop-types';
import '../App'
const TextEditor = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Extracted Text</h2>
      <textarea value={text} onChange={handleTextChange} rows={10} cols={50} />
    </div>
  );
};

TextEditor.propTypes = {
  initialText: PropTypes.string.isRequired
};

export default TextEditor;