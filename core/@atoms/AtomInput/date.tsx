import React, { FC, useMemo, useState } from 'react';
import lodash from 'lodash';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import InputText from './InputText';
import AtomInputType from './type';
import convertDateWithOptions from '../../utils/convertDateWithOptions';

const dateInitial = new Date();

type onChangeProps = {
  onDismissed?: () => void;
  onSet?: (date: Date) => void;
};

const onChange = (props: onChangeProps) => (event: DateTimePickerEvent, selectedDate?: Date) => {
  if (event.type === 'dismissed') {
    props?.onDismissed?.();
    return;
  }

  if (event.type === 'set') {
    const date = selectedDate ?? dateInitial;
    const currentDate = new Date(date.setHours(0, 0, 0, 0));
    props?.onSet?.(currentDate);
  }
};
const InputDate: FC<AtomInputType> = (props) => {
  const { formik, id, value } = props;
  const [isOpenModalDate, SetisOpenModalDate] = useState(false);
  const date = useMemo(
    () => new Date(value ?? lodash.get(formik?.values, id) ?? dateInitial),
    [value, lodash.get(formik?.values, id)]
  );
  return (
    <>
      {isOpenModalDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange({
            onDismissed: () => SetisOpenModalDate(false),
            onSet: (date) => {
              SetisOpenModalDate(false);
              formik?.setFieldValue(id, date);
            },
          })}
          themeVariant="dark"
          accentColor="#ff0000"
        />
      )}
      <InputText
        iconUri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/calendar.svg"
        inputIconHeigth="18px"
        inputIconWidth="18px"
        onPressIcon={() => SetisOpenModalDate(!isOpenModalDate)}
        onPressIn={() => SetisOpenModalDate(!isOpenModalDate)}
        value={convertDateWithOptions(`${date}`).split(',')[0]}
        {...props}
      />
    </>
  );
};
export default InputDate;
