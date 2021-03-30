/* eslint-disable consistent-return */
/* eslint-disable func-names */
import breakpointsMedia from '../breakpointsMedia';

export default function propToStyle(propName) {
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };

      return breakpointsMedia(breakpoints);
    }
  };
}
