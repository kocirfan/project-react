import * as yup from 'yup';

const validations = yup.object().shape({
  
  email: yup.string().email('Email adresi geçersiz!').required('Bu alan zorunludur.'),
  password: yup.string().min(5, 'Parola en az 5 karakter olmalıdır').required('Bu alan zorunludur.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], "Girilen parolalar aynı olmalıdır").required('Bu alan zorunludur.'),
  
});

export default validations;