import {Container, ContainerProps} from '../../Container';
import {Text} from '../../Text';

export function Information(
  props: ContainerProps & {title: string; caption: string},
) {
  const {title, caption, ...rest} = props;
  return (
    <Container backgroundColor="transparent" px="5px" {...rest}>
      <Text mt="10px" font="normal" color="light">
        {caption}
      </Text>
      <Text
        size="xl"
        mt="5px"
        mb="10px"
        numberOfLines={1}
        font="normal"
        color="light">
        {title}
      </Text>
    </Container>
  );
}
