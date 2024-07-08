import React, {Suspense, useMemo} from 'react';
import {SvgProps} from 'react-native-svg';
import {BaseContainer, ContainerProps} from '../Container/BaseContainer';
import {BaseText} from '../Text/BaseText';

const EmptyDocument = React.lazy(
  () => import('core/assets/svgs/empty-document.svg'),
);

export type EmptyStateProps = ContainerProps & {
  title: string;
  detail?: string;
  _svg?: SvgProps;
  content?: JSX.Element;
  icon: 'document';
};

export function EmptyState(props: EmptyStateProps) {
  const {title, detail, icon, content, _svg, ...rest} = props;

  const _icon = useMemo(() => {
    switch (icon) {
      case 'document':
        return <EmptyDocument {..._svg} />;
    }
  }, [icon, _svg]);

  return (
    <Suspense fallback={<BaseContainer />}>
      <BaseContainer
        bg="container.bg"
        pb="30%"
        flex={1}
        justifyContent="center"
        alignItems="center"
        {...rest}>
        {_icon}
        <BaseText
          mt="20px"
          mb="16px"
          textAlign="center"
          color="label"
          font="normal"
          size="l">
          {title}
        </BaseText>
        {detail ? <BaseText textAlign="center">{detail}</BaseText> : null}
        {content}
      </BaseContainer>
    </Suspense>
  );
}
