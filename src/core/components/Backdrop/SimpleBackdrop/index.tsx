import {BaseContainer} from 'core/components/Container/BaseContainer';
import {BackIconButton} from '../Icons/BackIcon';
import {StyledTitle} from './styles';

type Props = {
  title: string;
  hideBack?: boolean;
};

export function SimpleBackdrop(props: Props) {
  return (
    <BaseContainer
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="transparent">
      <BackIconButton
        opacity={!props.hideBack ? 100 : 0}
        backgroundColor="transparent"
      />
      <StyledTitle size="xr" font="normal" color="light">
        {props.title}
      </StyledTitle>
    </BaseContainer>
  );
}
