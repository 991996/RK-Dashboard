import { Button } from "@/components/ui/button";

export default function PrimaryButton({
  type = "button",
  onClick,
  disabled = false,
  className = "",
  children = null,
}) {
  return (
    <Button
      type={type}
      className={`${className} capitalize bg-primary-red rounded-lg cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
