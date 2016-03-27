import React, { PropTypes } from 'react';

const InputNickname = ({ initialNickname, dispatchName }) => {
  let input;
  const handleKeyPress = (e) => e.key === 'Enter' ? dispatchName(input.value) : true;


  return (
    <div className="page login">
      <form className="login__form">
        <h3 className="login__label">What is your nickname?</h3>
        <input
          ref={node => {
            input = node;
          }}
          type="text"
          className="login__username-input"
          onKeyPress={handleKeyPress}
          defaultValue={initialNickname}
        />
      </form>
    </div>
  );
};

InputNickname.propTypes = {
  initialNickname: PropTypes.string.isRequired,
  dispatchName: PropTypes.func.isRequired,
};

export default InputNickname;
