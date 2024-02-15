import FormWrapper from "@/app/ui/auth/form-card";

export default function Register() {
  return (
    <>
      <FormWrapper
        headerLabel="Register"
        buttonLabel="Sign Up"
        hrefContent="Already have an account? "
        hrefLabel="Login"
        isRegister={true}
        hrefBackLink="login"
      >
      </FormWrapper>
    </>
  );
}
