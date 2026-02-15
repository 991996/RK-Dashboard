import { Button } from "@/components/ui/button";

export default function PrimaryButton({ text, type = "button", onClick }) {
  return (
    <Button
      type={type}
      className=" capitalize bg-primary-red rounded-xl cursor-pointer"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
