import React from "react";
import InputErrMsg from "@/app/components/input-error-msg";
import clsx from 'clsx';

interface InputProps {
  id: string;
  label: string;
  type: string;
  errorState?: {
    errors?: any;
    message?: string | null;
  };
}

const Input: React.FC<InputProps> = ({ id, label, type, errorState }) => {
  const isError = errorState?.errors && errorState?.errors[id];

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        aria-describedby={`${id}-error`}
        className={clsx('block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none outline-none no-spinner peer',
          {
            'outline-red-500 focus:outline-white focus:outline-0': isError
          })}
        placeholder=" "
        autoComplete={type === 'password' ? 'current-password': ""}
      />
      <label
        htmlFor={id}
        className={clsx("absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6", {
          "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3": true
        })}
      >
        {label}
      </label>
      <InputErrMsg id={id} errorState={errorState} />
    </div>
  );
};

export default Input;
