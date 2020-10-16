import { mediaquery } from '@styles/media';
import { ITAOAThemeUIContext } from '@types';

import styled from '@emotion/styled';
import * as CSS from 'csstype';

const Paragraph = styled.p((p: ITAOAThemeUIContext) => ({
  lineHeight: '1.756',
  fontSize: '18px',
  color: p.theme.colors.articleText as CSS.ColorProperty,
  fontFamily: p.theme.fonts.sansSerif,
  transition: p.theme.colorModeTransition,
  margin: '0 auto 25px',
  width: '100%',
  maxWidth: '780px',

  b: {
    fontWeight: 800
  },

  [mediaquery.desktop()]: {
    maxWidth: '607px'
  },

  [mediaquery.tablet()]: {
    maxWidth: '586px',
    margin: '0 auto 25px',
    fontSize: '16px'
  },

  [mediaquery.phablet()]: {
    padding: '0 20px',
    fontSize: '14px'
  }
}));

export default Paragraph;
