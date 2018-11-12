/**
 * Convert a theme into a makeTheme
 * @param theme
 */
export const toMakeTheme = (theme) => (userTheme) => ({ ...theme, ...userTheme });

/**
 * Convert a scoped theme into a makeTheme
 * @param theme
 */
export const toMakeScopedTheme = (theme) => (userTheme) => {
  let result = {};
  Object.keys(theme).forEach((key) => result = { [key]: { ...theme[key], ...userTheme } }); // eslint-disable-line no-return-assign
  return result;
};

function makeThemeFromList(list, theme) {
  const all = [].concat(list);
  let t = theme;
  let mt;
  while (mt = all.pop()) { // eslint-disable-line
    t = mt(t);
  }
  return t;
}

/**
 * Create a makeTheme using a list of makeTheme
 * @param list
 * @returns {function(*=): *}
 */
export default function createMakeTheme(list) {
  return (theme) => makeThemeFromList(list, theme);
}

/**
* Create a scoped makeTheme
* @param userTheme
* @param scopeName string
*
**/

export function makeScopedTheme(userTheme = { [scopeName]: {} }, scopeName) {
  if (scopeName === undefined) return console.warn('You may have forgotten to set the scope name in the makeScopedTheme function.');

  const newTheme = { [scopeName]: {} };
  const v = newTheme[scopeName];
  const u = userTheme[scopeName] || {};

  Object.keys(userTheme).forEach((variable) => {
    v[variable] = u[variable] || userTheme[variable];
  });

  return { [scopeName]: { ...userTheme, ...v } };
}