import styled from 'styled-components';
import Modal from 'react-native-modal';
import {flexbox} from 'styled-system';

export const StyledModal = styled(Modal)`
  margin: 0;
  height: 100%;
  width: 100%;
  ${flexbox}
`;
