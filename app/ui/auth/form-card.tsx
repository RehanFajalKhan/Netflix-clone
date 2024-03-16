"use client";
import Input from "@/app/components/Input";
import Link from "next/link";
import SocialIconList from "./social-icon-list";
import { useFormState, useFormStatus } from "react-dom";
import { State } from "@/app/lib/definition";
import { FormError } from "@/app/components/form-error";

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
  const initialState = { errors: {}, message: "" };
  const [errorState, dispatch] = useFormState(f, initialState);
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center space-y-1">
      <form
        action={dispatch}
        className="bg-black bg-opacity-70 px-4 py-4 md:px-8 mt-2 lg:max-w-md rounded-md w-full"
      >
        <h2 className="text-white text-3xl mb-8 font-semibold">
          {headerLabel}
        </h2>
        <div className="flex flex-col gap-4">
          {isRegister && (
            <Input
              id="name"
              label="Full Name"
              type="text"
              errorState={errorState}
            />
          )}
          <Input
            type="email"
            id="email"
            label="email address"
            errorState={errorState}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            errorState={errorState}
          />
          <FormError errorState={errorState} />
        </div>
        <button
          aria-disabled={pending}
          className="bg-red-500 py-3 text-white rounded-md w-full mt-10 hover:bg-red-600 transition"
        >
          {buttonLabel}
        </button>
        <SocialIconList />
        <p className="text-neutral-500 mt-4">
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
