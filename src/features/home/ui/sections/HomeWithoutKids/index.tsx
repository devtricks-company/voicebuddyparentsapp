import {useNavigation} from '@react-navigation/native';
import {AppRoutes, Navigation} from 'app/navigators/types';
import {Button} from 'core/components';
import {BaseContainer} from 'core/components/Container/BaseContainer';
import {Image} from 'react-native';
export default function HomeWithoutKids() {
  const navigation = useNavigation<Navigation>();

  return (
    <BaseContainer
      backgroundColor="#F3F3F3"
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={0}>
      <Image source={require('core/assets/svgs/user.png')} />
      <Button
        label="Add the first kid"
        variant="outlined"
        color="#222"
        mt={25}
        width={'60%'}
        onPress={() => navigation.navigate(AppRoutes.ADDKID)}
      />
    </BaseContainer>
  );
}
