import InputCheckbox from './checkbox';
import InputDate from './date';
import InputText from './InputText';
import InputPassword from './password';
import InputRadio from './radio';
import InputSelect from './select';
import AtomInputType, { CustomCheckbox } from './type';

const AtomInput = (props: AtomInputType) => {
  const { type } = props;
  switch (type) {
    case 'text':
      return <InputText {...props} />;
    case 'email':
      return <InputText keyboardType="email-address" {...props} />;
    case 'password':
      return <InputPassword {...props} />;
    case 'checkbox':
      return <InputCheckbox {...(props as unknown as CustomCheckbox)} />;
    case 'search':
      return <InputText inputIconHeigth="20px" {...props} />;
    case 'select':
      return <InputSelect {...props} />;
    case 'date':
      return <InputDate {...props} />;
    case 'radio':
      return <InputRadio {...(props as unknown as CustomCheckbox)} />;
    default:
      return <InputText {...props} />;
  }
};
export default AtomInput;
