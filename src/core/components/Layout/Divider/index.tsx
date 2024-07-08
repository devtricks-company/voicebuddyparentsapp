import {BaseContainer, ContainerProps} from '../../Container/BaseContainer';

export function Divider(props: ContainerProps) {
  return <BaseContainer height={1} backgroundColor="border" {...props} />;
}
