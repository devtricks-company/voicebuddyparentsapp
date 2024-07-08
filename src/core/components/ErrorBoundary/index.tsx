import RNRestart from 'react-native-restart';
import {useSetAtom} from 'jotai';
import {BaseText} from '../Text/BaseText';
import {Button} from '../Button';
import {BaseContainer} from '../Container/BaseContainer';
import {tokenAtom, userAtom} from 'core/atoms/auth';

export function ErrorBoundary() {
  const setToken = useSetAtom(tokenAtom);
  const setUser = useSetAtom(userAtom);
  return (
    <BaseContainer
      p="20px"
      flex={1}
      pt="5"
      alignItems="center"
      justifyContent="center">
      {/* <Icon name="small-logo" width={50} height={50} /> */}
      <BaseText mt="20px" color="label" size="xr" font="normal">
        Oops, Something Went Wrong
      </BaseText>
      <BaseText my="5px" textAlign="center">
        The app ran into a problem and could not continue. We apologise for any
        inconvenience this has caused. Press the button below to restart the app
        back in. Please contact us if this issue persists.
      </BaseText>
      <Button
        mt="10px"
        onPress={() => RNRestart.Restart()}
        label="Restart VoiceBuddy"
      />
      <Button
        variant="text"
        onPress={() => {
          void setToken(null);
          void setUser(null);
          RNRestart.Restart();
        }}
        label="Logout"
      />
    </BaseContainer>
  );
}
