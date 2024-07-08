import React from 'react';
import {useTheme} from 'styled-components';
import {get} from 'lodash';
import {Backdrop} from 'core/components/Backdrop';

export function withScreenOptions<T extends {}>(
  WrappedComponent: React.ComponentType<T>,
) {
  return (props: T) => {
    const {components} = useTheme();
    return (
      <WrappedComponent
        {...props}
        screenOptions={({route}: {route: {name: string}}): unknown => ({
          ...get(props, 'screenOptions'),
          headerShown: false,
          contentStyle: {
            backgroundColor: components.container.bg,
          },
          ...(route.name.includes('Modal')
            ? {
                // headerShown: true,
                headerLeft: () => (
                  <Backdrop.BackIconButton
                    fill="label"
                    backgroundColor="transparent"
                  />
                ),
                presentation: 'modal',
                headerTitleStyle: {
                  color: components.modal.title,
                },
                headerStyle: {
                  backgroundColor: components.modal.bg,
                },
              }
            : {}),
        })}
      />
    );
  };
}
