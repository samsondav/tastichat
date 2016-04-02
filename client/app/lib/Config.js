import deepFreeze from 'deep-freeze';
import _ from 'lodash';

// Set global constants that do not change for the life of the app in here
class Config {
  set(name, value) {
    if (this[name] !== undefined) {
      throw new Error(`Tried to set key name "${name}" in Config but it was already set with value "${this[name]}".`);
    }
    if (name !== name.toUpperCase()) {
      throw new Error(`Tried to set key name "${name}" but Config values must be UPCASE.`);
    }
    deepFreeze(value);
    this[name] = value;
    return value;
  }

  get(name) {
    return this[name];
  }

  /**
   * Get CSRF Token from the DOM.
   *
   * @returns {String} - CSRF Token.
   */
  getCSRFToken() {
    const token = _.find(document.querySelectorAll('meta'), ['name', 'csrf-token']);
    return token && token.content;
  }


  getActionCableURL() {
    return this._getMeta('action-cable-url');
  }

  getChatWindowId() {
    return this._getMeta('chat-window-id');
  }

  _getMeta(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta && meta.getAttribute("content");
  }
}

export default new Config;
