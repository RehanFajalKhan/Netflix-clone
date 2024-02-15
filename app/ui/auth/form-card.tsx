import Input from "@/app/components/Input";
import Link from "next/link";
import SocialIconList from "./social-icon-list";

interface FormWrapperProps { 
  headerLabel: string;
  buttonLabel: string;
  hrefLabel: string;
  hrefContent: string;
  isRegister: boolean;
  hrefBackLink: string;
}
const FormWrapper = ({
  headerLabel,
  buttonLabel,
  hrefContent,
  hrefLabel,
  isRegister,
  hrefBackLink
}: FormWrapperProps) => {
  return (
    <div className="flex justify-center">
      <form  className="bg-black bg-opacity-70 px-8 py-8 md:px-8 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {headerLabel}
        </h2>
        <div className="flex flex-col gap-4">
          {isRegister && (
          <Input id="mobile" type="number" label="Mobile Number" />
          )}
          <Input id="email" type="email" label={isRegister ? 'Email Address':'Email Address or phone number'} />
          <Input type="password" id="password" label="Password" />
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
