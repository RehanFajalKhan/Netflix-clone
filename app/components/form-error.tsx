import { FaExclamationTriangle } from "react-icons/fa";

export const FormError = ({
  errorState,
}: {
    errorState?: {
        errors?: any;
        message?: string | null;
      };
}) => {
  
  if (!errorState || !errorState.message) return null;
  return (
    <div className="bg-slate-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <FaExclamationTriangle className="h-5 w-5 text-red-500"/>
      <p className="text-red-500">{errorState.message}</p>
    </div>
    
  );
};