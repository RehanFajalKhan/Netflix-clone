"use client";
import Input from "@/app/components/Input";
import Link from "next/link";
import SocialIconList from "./social-icon-list";
import { useFormState } from "react-dom";
import InputErrMsg from "@/app/components/input-error-msg";
import { State } from "@/app/lib/action";

interface FormWrapperProps {
  headerLabel: string;
  buttonLabel: string;
  hrefLabel: string;
  hrefContent: string;
  isRegister: boolean;
  hrefBackLink: string;
  f: (prevState: State, formData: FormData) => {};
}
const FormWrapper = ({
  headerLabel,
  buttonLabel,
  hrefContent,
  hrefLabel,
  isRegister,
  hrefBackLink,
  f,
}: FormWrapperProps) => {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(f, initialState);
  return (
    <div className="flex justify-center">
      <form
        action={dispatch}
        className="bg-black bg-opacity-70 px-8 py-8 md:px-8 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
      >
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {headerLabel}
        </h2>
        <div className="flex flex-col gap-4">
          {isRegister && (
            <>
              <Input id="name" label="Full Name" type="text" />
              <InputErrMsg state={state} id="name" />
            </>
          )}

          <Input
            id="userEmail"
            type="email"
            label={
              isRegister ? "Email Address" : "Email Address or phone number"
            }
          />
          <InputErrMsg state={state} id="email" />
          <Input type="password" id="password" label="Password" />
          <InputErrMsg state={state} id="password" />
        </div>
        <button className="bg-red-500 py-3 text-white rounded-md w-full mt-10 hover:bg-red-600 transition">
          {buttonLabel}
        </button>
        <SocialIconList />
        <p className="text-neutral-500 mt-8">
          {hrefContent}
          <Link
            href={`/auth/${hrefBackLink}`}
            className="ml-1 hover:underline text-white underline cursor-pointer"
          >
            {hrefLabel}
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default FormWrapper;
