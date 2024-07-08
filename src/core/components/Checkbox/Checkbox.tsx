import React from 'react';
import {Touchable} from '../Touchable';
import {Container} from '../Container';
import {Icon} from '../Icon';

export type CheckboxProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  text?: string | React.ReactElement;
};

export function Checkbox(props: CheckboxProps) {
  const {value, onChange, text} = props;
  return (
    <Container.HStack gap={10} center>
      <Touchable
        onPress={() => onChange(!value)}
        border={1}
        borderRadius={50}
        height={20}
        alignItems="center"
        justifyContent="center"
        width={20}
        backgroundColor={value ? 'primary' : 'transparent'}
        borderColor={value ? 'transparent' : 'text'}>
        {value ? (
          <Icon name="check" fill="light" width={10} height={10} />
        ) : null}
      </Touchable>
      {text}
    </Container.HStack>
  );
}
