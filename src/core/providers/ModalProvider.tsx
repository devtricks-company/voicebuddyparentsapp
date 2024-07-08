import {Dimensions, Easing} from 'react-native';
import {
  createModalStack,
  ModalComponentProp as IModalComponentProp,
  ModalProvider as ModalfyProvider,
  ModalStackConfig,
} from 'react-native-modalfy';
import {ReactNode} from 'react';
import {Picker} from '../components/Picker/Picker';
import {Alert} from '../components/Alert/Alert';
import {Sheet} from '../components/Sheet/Sheet';
import {IconName} from '../components/Icon';

const {height} = Dimensions.get('screen');

export enum ModalStacks {
  Picker = 'Picker',
  Alert = 'Alert',
  Sheet = 'Sheet',
}

export type PickerProps<
  T = {id: number | string; title: string; icon: IconName},
> = {
  items: Array<T>;
  onSelect: (item: T) => void;
};

export type AlertProps = {
  title: string;
  text: string;
  description: string;
  onAccept: () => void;
};

export type SheetProps = {
  title: string;
  subtitle?: string;
  content: ReactNode;
};

export interface ModalStackParams {
  [ModalStacks.Picker]: PickerProps;
  [ModalStacks.Alert]: AlertProps;
  [ModalStacks.Sheet]: SheetProps;
}

export type ModalComponentProps<T extends ModalStacks> = IModalComponentProp<
  ModalStackParams,
  void,
  T
>;

const modalConfig: ModalStackConfig = {Picker, Alert, Sheet};

const modalStack = createModalStack(modalConfig, {
  position: 'bottom',
  backdropOpacity: 0.7,
  backBehavior: 'clear',
  animateInConfig: {
    easing: Easing.inOut(Easing.exp),
    duration: 300,
  },
  animateOutConfig: {
    easing: Easing.inOut(Easing.exp),
    duration: 150,
  },
  transitionOptions: animatedValue => ({
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [height, 0, height],
        }),
      },
    ],
  }),
});

export function ModalProvider(props: {children: JSX.Element}) {
  return <ModalfyProvider stack={modalStack}>{props.children}</ModalfyProvider>;
}
