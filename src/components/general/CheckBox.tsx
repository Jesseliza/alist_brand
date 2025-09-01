import { forwardRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, className = "", ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={onChange}
        className={`
          min-w-[19px] min-h-[19px] w-[21px] h-[21px]
          appearance-none
          bg-[#f2f2f2]
          border border-[#bdbdbd]
          rounded-[6px]
          inline-block
          cursor-pointer
          checked:bg-[#00a4b6]
          checked:border-[#00a4b6]
          focus:outline-none
          focus:shadow-[0_0_3px_#bdbdbd]
          ${className}
        `}
        {...props}
      />
    );
  }
);
