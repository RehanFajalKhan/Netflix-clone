import React from "react";

interface InputErrMsgProps {
  id: string;
  errorState?: {
    errors?: any;
    message?: string | null;
  };
}
const InputErrMsg: React.FC<InputErrMsgProps> = ({ id, errorState:state }) => {
  const errorMessages = state?.errors?.[id];
  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      aria-atomic="true"
      // className="-mt-4"
    >
      {errorMessages &&
        errorMessages.map((error: string) => (
          <span className="text-sm text-red-500" key={error}>
            {error}
          </span>
        ))}
    </div>
  );
};

export default InputErrMsg;
