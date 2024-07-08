import {useNavigation} from '@react-navigation/native';
import {Icon} from '../../../Icon';
import {Text} from '../../../Text';
import {Touchable} from '../../../Touchable';
import {Colors} from 'core/styles/colors';

export function BackIconButton(props: {
  opacity?: number;
  fill?: keyof Colors | string;
  backgroundColor?: keyof Colors | string;
}) {
  const navigation = useNavigation();
  return (
    <Touchable
      flexDirection="row"
      alignItems="center"
      onPress={navigation.goBack}>
      <Icon.IconButton
        disabled={props?.opacity === 0}
        opacity={props.opacity}
        iconSize={18}
        name="arrow-left"
        fill={props.fill ?? 'darkPrimary'}
        backgroundColor={props.backgroundColor}
      />
      <Text size="xr" color="darkPrimary">
        Back
      </Text>
    </Touchable>
  );
}
