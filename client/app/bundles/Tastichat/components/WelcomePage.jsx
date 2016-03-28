import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WarriorRecord from '../store/WarriorRecord';

const WelcomePage = ({ thisWarrior, visible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchName(input.value);
  };

  const visibilityClass = visible ? 'page--visible' : 'page--hidden';
  const elementClasses = classNames('page', 'login', visibilityClass);

  return (
    <page
      className={elementClasses}
      style={{ backgroundColor: thisWarrior.colour }}
    >
      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__label">What is your nickname?</h3>
        <input
          ref={node => {
            input = node;
          }}
          type="text"
          className="login__username-input"
          defaultValue={thisWarrior}
          autoFocus={true}
        />
      </form>
    </page>
  );
};

WelcomePage.propTypes = {
  thisWarrior: PropTypes.instanceOf(WarriorRecord).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default WelcomePage;
