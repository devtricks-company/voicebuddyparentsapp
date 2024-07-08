import {Scroll} from 'core/components';
import {Container} from 'core/components/Container';
import {Text} from 'core/components/Text';
import {alignItems, flex, justifyContent, width} from 'styled-system';
import {AuthTitle} from '../components/AuthTitle';
import {AuthStage} from 'core/types';
import {useAtomValue} from 'jotai';
import {authStageAtom} from 'core/atoms';
import {SingIn} from '../sections/SignIn';
import Verification from '../sections/Verification';
import InformationSection from '../sections/Information';

export function AuthScreen() {
  const authStage = useAtomValue(authStageAtom);
  return (
    <Container
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor="#F3F3F3">
      <AuthTitle pt={'23px'} px={'23px'} stage={authStage} />
      {authStage === AuthStage.SingIn ? (
        <SingIn />
      ) : authStage === AuthStage.Verification ? (
        <Verification />
      ) : (
        <InformationSection />
      )}
    </Container>
  );
}
