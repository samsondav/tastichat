import deepFreeze from 'deep-freeze';

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
}

export default new Config;
