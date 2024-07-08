import {BaseContainer, ContainerProps} from '../BaseContainer';

const centerSpace: ContainerProps = {
  justifyContent: 'space-between',
  alignItems: 'center',
};
const center: ContainerProps = {
  alignItems: 'center',
};

export function HStack(
  props: ContainerProps & {centerSpace?: boolean; center?: boolean},
) {
  return (
    <BaseContainer
      flexDirection="row"
      {...(props.centerSpace ? centerSpace : undefined)}
      {...(props.center ? center : undefined)}
      {...props}
    />
  );
}
