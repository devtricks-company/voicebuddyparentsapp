import {BarIndicator} from 'react-native-indicators';
import {useTheme} from 'styled-components';
import {useAtomValue} from 'jotai';
import {
  RefreshControl as NativeRefreshControl,
  RefreshControlProps,
} from 'react-native';
import {BaseContainer, ContainerProps} from '../Container/BaseContainer';
import {loadingAtom, loadingReason} from 'core/atoms/loading';
import {Icon} from '../Icon';
import {Text} from '../Text';

export function Loading(props: ContainerProps) {
  const theme = useTheme();
  return (
    <BaseContainer
      flex={1}
      justifyContent="space-between"
      backgroundColor="container.bg"
      {...props}>
      <BarIndicator color={theme.palette.primary} />
    </BaseContainer>
  );
}

interface LoadingProps {
  reason?: string;
}

export function TransparentLoading(props: LoadingProps) {
  const {reason} = props;
  return (
    <BaseContainer
      position="absolute"
      width="100%"
      height="100%"
      backgroundColor="#fff"
      alignItems="center"
      justifyContent="center">
      <Icon name="jojo-rtl" width={200} height={200} />
      <Text mt={10} color="black" size="xl">
        Loading ...
      </Text>
      <Text mt={10} size="l">
        {reason ?? 'It is loading please wait'}
      </Text>
    </BaseContainer>
  );
}

export function FullScreenLoading() {
  const loading = useAtomValue(loadingAtom);
  const reason = useAtomValue(loadingReason);
  if (!loading) return null;
  return <TransparentLoading reason={reason} />;
}

export function RefreshControl(props: RefreshControlProps) {
  const {
    palette,
    components: {
      refreshControl: {color},
    },
  } = useTheme();
  return (
    <NativeRefreshControl
      tintColor={color}
      colors={[palette.primary]}
      {...props}
    />
  );
}
