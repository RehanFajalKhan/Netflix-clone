import { loginUser } from "@/app/lib/action/login-user";
import FormWrapper from "@/app/ui/auth/form-card";

export default function LoginForm() {
  return (
    <FormWrapper
      headerLabel="Sign In"
      buttonLabel="Sign In"
      hrefContent="First time using Netflix?"
      hrefLabel="Create an account"
      isRegister={false}
      hrefBackLink="register"
      f = {loginUser}
    ></FormWrapper>
  );
}
