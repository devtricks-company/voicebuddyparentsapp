import {ComponentType} from 'react';
import styled from 'styled-components/native';
import {border, flexbox, layout, opacity, position, space} from 'styled-system';
import {StyledSystemProps} from 'core/types';
import {getColor} from 'core/helpers/color';

export function Factory<T>(component: ComponentType<T>) {
  return styled(component)<StyledSystemProps>`
    ${space}
    ${flexbox}
    ${layout}
    ${border}
    ${position}
    ${opacity}
    background-color: ${({theme, backgroundColor, bg}) =>
      getColor(theme, backgroundColor || bg)};
  `;
}
