import React, { PropTypes } from 'react';
import classNames from 'classnames';

const InputNickname = ({ initialNickname, dispatchName, visible, userColour }) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchName(input.value);
  };

  const visibilityClass = visible ? 'page--visible' : 'page--hidden';
  const elementClasses = classNames('page', 'login', visibilityClass);

  return (
    <page
      className={elementClasses}
      style={{ backgroundColor: userColour }}
    >
      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__label">What is your nickname?</h3>
        <input
          ref={node => {
            input = node;
          }}
          type="text"
          className="login__username-input"
          defaultValue={initialNickname}
          autoFocus={true}
        />
      </form>
    </page>
  );
};

InputNickname.propTypes = {
  initialNickname: PropTypes.string.isRequired,
  dispatchName: PropTypes.func.isRequired,
};

export default InputNickname;
