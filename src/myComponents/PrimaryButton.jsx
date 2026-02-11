import { Button } from "@/components/ui/button";

export default function PrimaryButton({ text, type = "button" }) {
  return (
    <Button
      type={type}
      className=" capitalize bg-primary-red rounded-xl cursor-pointer"
    >
      {text}
    </Button>
  );
}
