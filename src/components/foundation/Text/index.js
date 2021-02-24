/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
// import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const paragraph1 = `
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = `
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariantsMap = {
  smallestException,
  paragraph1,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

// const TextBase = styled.span`
//   ${(props) => {
//     const { fontSize, fontWeight, lineHeight } = get(
//       props.theme.typographyVariants,
//       props.variant
//     );

//     return css`
//       font-size: ${fontSize};
//       font-weight: ${fontWeight};
//       line-height: ${lineHeight};
//     `;
//   }}
// `;

export default function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>

  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
