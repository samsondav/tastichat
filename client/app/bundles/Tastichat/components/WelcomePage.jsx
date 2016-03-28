import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WarriorRecord from '../store/WarriorRecord';

const WelcomePage = ({ thisWarrior, visible }) => {
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
      style={{ backgroundColor: thisWarrior.colour }}
    >
      <div className="login__box">
        <h3 className="login__label">Welcome back, {thisWarrior.name}</h3>
        <img className="login__avatar" src={thisWarrior.avatarUrl} />
        <button
          ref={node => {
            input = node;
          }}
          type="button"
          className="login__button"
        >
          Continue plotting with other fruit samurai
        </button>
      </div>
    </page>
  );
};

WelcomePage.propTypes = {
  thisWarrior: PropTypes.instanceOf(WarriorRecord).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default WelcomePage;
