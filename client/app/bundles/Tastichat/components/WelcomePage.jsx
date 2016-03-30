import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WarriorRecord from '../store/WarriorRecord';

const WelcomePage = ({ thisWarrior, visible, dispatchLogin }) => {
  const handleClick = (e) => {
    dispatchLogin();
  };

  const visibilityClass = visible ? 'page--visible' : 'page--hidden';
  const elementClasses = classNames('page', 'login', visibilityClass);

  return (
    <page
      className={elementClasses}
    >
      <div className="login__box"
        style={{ backgroundColor: thisWarrior.colour }}
      >
        <h3 className="login__label">Welcome back, {thisWarrior.name}</h3>
        <img className="login__avatar" src={thisWarrior.avatarUrl} />
        <button
          type="button"
          className="login__button"
          onClick={handleClick}
        >
          Enter chat
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
