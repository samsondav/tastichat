import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WarriorRecord from '../store/WarriorRecord';

const WelcomePage = ({ thisWarrior, dispatchLogin }) => {
  const handleClick = (e) => {
    dispatchLogin();
  };

  return (
    <page>
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
};

export default WelcomePage;
