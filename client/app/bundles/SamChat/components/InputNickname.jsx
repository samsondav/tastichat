import React, { PropTypes } from 'react';

const InputNickname = ({ initialNickname, dispatchName }) => {
  let input;
  const handleKeyPress = (e) => e.key === 'Enter' ? dispatchName(input.value) : true;


  return (
    <div className="input-nickname">
      <label htmlFor="input-nickname__input" className="input-nickname_label">
        What is your nickname?
        <input
          ref={node => {
            input = node;
          }}
          id="input-nickname__input"
          type="text"
          className="input-nickname__input"
          onKeyPress={handleKeyPress}
          defaultValue={initialNickname}
        />
      </label>
    </div>
  );
};

InputNickname.propTypes = {
  initialNickname: PropTypes.string.isRequired,
  dispatchName: PropTypes.func.isRequired,
};

export default InputNickname;
