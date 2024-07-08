import {useEffect} from 'react';
import {BaseContainer, ContainerProps} from '../Container/BaseContainer';
import {BaseText} from '../Text/BaseText';
import {AxiosError, getAxiosError, logAxiosError} from 'core/helpers/axios';
import {Badge} from '../Badge';

type ErrorProps = ContainerProps & {
  description?: string;
  error?: string | Error | AxiosError;
  section?: string;
};

export function Error(props: ErrorProps) {
  const {description, error, section, ...rest} = props;

  useEffect(() => {
    if (typeof error !== 'string') logAxiosError(error, section);
  }, [error, section]);

  return (
    <BaseContainer
      {...rest}
      flex={1}
      justifyContent="center"
      alignItems="center">
      <BaseText size="l" font="normal">
        Whoops!
      </BaseText>
      {description ? (
        <BaseText textAlign="center" my="15px">
          {description}
        </BaseText>
      ) : null}
      {error ? (
        <Badge
          mx="20px"
          label={typeof error !== 'string' ? getAxiosError(error) : error}
          fontSize="r"
          variant="error"
        />
      ) : null}
    </BaseContainer>
  );
}
