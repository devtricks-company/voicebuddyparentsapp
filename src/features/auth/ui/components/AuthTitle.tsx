import {useAtomValue} from 'jotai';
import {Container, Text, TextProps} from 'core/components';
import {AuthStage} from 'core/types';
import {tempUserAtom} from 'features/auth/atoms/auth';
import {fontSize} from 'styled-system';

type Props = TextProps & {
  stage: AuthStage;
};

export function AuthTitle(props: Props) {
  const {stage, ...rest} = props;
  const tmpUserAtom = useAtomValue(tempUserAtom);

  return (
    <Container {...rest} width={'80%'}>
      {stage === AuthStage.SingIn ? (
        <Container width={'100%'}>
          <Text
            font="normal"
            color="label"
            textAlign="center"
            fontSize={20}
            pb={'24.5px'}
            fontWeight={500}>
            Login
          </Text>
          <Text
            font="normal"
            textAlign="left"
            fontWeight={400}
            fontSize={15}
            color="#222">
            Please enter your email.
          </Text>
        </Container>
      ) : stage === AuthStage.Verification ? (
        <Container>
          <Text
            font="normal"
            color="label"
            textAlign="center"
            fontSize={20}
            pb={'24.5px'}
            fontWeight={500}>
            Email Verification
          </Text>
          <Text
            font="normal"
            textAlign="left"
            fontWeight={400}
            fontSize={15}
            color="#222"
            mb={24}>
            Please enter verification code has been sent to {tmpUserAtom?.email}
          </Text>
        </Container>
      ) : (
        <Container>
          <Text
            font="normal"
            color="label"
            textAlign="center"
            fontSize={20}
            pb={'24.5px'}
            fontWeight={500}>
            Your Kid Info
          </Text>
          <Text
            font="normal"
            textAlign="left"
            fontWeight={400}
            fontSize={15}
            color="#222"
            mb={13}>
            Please enter the following information
          </Text>
        </Container>
      )}
    </Container>
  );
}
