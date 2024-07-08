import {SafeAreaProvider} from 'react-native-safe-area-context';
import {queryClient, HaydreateAtoms} from 'core/atoms';
import {QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'jotai';
import {ThemeProvider} from './ThemeProvider';
import * as Sentry from '@sentry/react-native';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {ModalProvider} from './ModalProvider';
import {FullScreenLoading} from '../components/Loading';
type Props = {
  children: JSX.Element;
};

export default function Providers(props: Props) {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <HaydreateAtoms>
            <ThemeProvider>
              <Sentry.ErrorBoundary fallback={<ErrorBoundary />}>
                <ModalProvider>{props.children}</ModalProvider>
                <FullScreenLoading />
              </Sentry.ErrorBoundary>
            </ThemeProvider>
          </HaydreateAtoms>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
