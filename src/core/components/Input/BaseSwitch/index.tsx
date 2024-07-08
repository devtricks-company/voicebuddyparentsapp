import React from 'react';
import {Switch} from 'react-native';
import {useTheme} from 'styled-components';
import {Container, ContainerProps} from 'core/components/Container';
import {BaseContainer} from 'core/components/Container/BaseContainer';
import {Text} from 'core/components/Text';

export type SwitchProps = {
  label: string;
  description?: string;
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
  disabled?: boolean;
  container?: ContainerProps;
};

export const BaseSwitch: React.FunctionComponent<SwitchProps> = props => {
  const {label, container, error, onChange, description, value, ...rest} =
    props;
  const theme = useTheme();
  return (
    <BaseContainer {...container}>
      <Container gap={5} flex={1}>
        <Text color="label" font="normal">
          {label}
        </Text>
        {description ? <Text size="s">{description}</Text> : null}
      </Container>

      <Switch
        trackColor={{
          false: theme.components.border,
          true: theme.palette.primary,
        }}
        thumbColor={theme.palette.light}
        ios_backgroundColor={
          value ? theme.palette.primary : theme.palette.light
        }
        style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
        onValueChange={onChange}
        value={value}
        {...rest}
      />

      {error ? (
        <Text mt="2.5px" font="normal" color="error" size="t">
          {error}
        </Text>
      ) : null}
    </BaseContainer>
  );
};
