import styled from 'styled-components';
import {BaseContainer} from '../BaseContainer';

export const Container = styled(BaseContainer)`
  border-color: ${({theme}) => theme.components.border};
  border-width: 1px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px 0;
`;

export const HeaderContainer = styled(BaseContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom-color: ${({theme}) => theme.components.border};
  border-bottom-width: 1px;
`;
