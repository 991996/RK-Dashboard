import { Button } from "@/components/ui/button";

export default function PrimaryButton({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <Button
      type={type}
      className=" capitalize bg-primary-red rounded-lg cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
