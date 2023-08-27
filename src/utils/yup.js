import * as Yup from 'yup'
export const schemaRegisterForm = Yup.object().shape({
  username: Yup.string().required(true),
  email: Yup.string().email(true).required(true),
  password: Yup.string().required(true)
})
