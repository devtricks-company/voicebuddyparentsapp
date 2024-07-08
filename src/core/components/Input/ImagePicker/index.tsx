import {useCallback, useState} from 'react';
import ImagePickerHelper, {Image} from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {Touchable} from 'core/components/Touchable';
import {List} from 'core/components/List';
import {BaseContainer} from 'core/components/Container/BaseContainer';
import {BaseInput, InputProps} from 'core/components/Input/BaseInput';

export type ImagePickerProps = Omit<InputProps, 'value' | 'onChange'> & {
  value: Image | undefined;
  onChange: (value: Image) => void;
};

export function ImagePicker(props: ImagePickerProps) {
  const {value, onChange, ...rest} = props;

  const [modal, setModal] = useState(false);

  const handleLibraryPress = useCallback(() => {
    void ImagePickerHelper.openPicker({
      mediaType: 'photo',
      multiple: false,
    })
      .then(image => onChange(image))
      .finally(() => {
        setModal(false);
      });
  }, [onChange]);

  const handleCameraPress = useCallback(() => {
    void ImagePickerHelper.openCamera({
      mediaType: 'photo',
      multiple: false,
    })
      .then(image => onChange(image))
      .finally(() => {
        setModal(false);
      });
  }, [onChange]);

  return (
    <>
      <Touchable onPress={() => setModal(true)}>
        <BaseInput
          value={value ? value?.filename ?? 'Image.jpg' : undefined}
          pointerEvents="none"
          // rightIcon="image"
          editable={false}
          {...rest}
        />
      </Touchable>

      <Modal
        isVisible={modal}
        hideModalContentWhileAnimating
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}>
        <BaseContainer p="15px" borderRadius="10px">
          <List.Item
            title="Gallery"
            icon="arrow-left"
            onPress={handleLibraryPress}
          />
          <List.Item
            title="Camera"
            icon="arrow-left"
            onPress={handleCameraPress}
          />
        </BaseContainer>
      </Modal>
    </>
  );
}
