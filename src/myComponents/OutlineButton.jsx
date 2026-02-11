import { Button } from "@/components/ui/button";

export default function OutlineButton({ text, type = "button" }) {
  return (
    <Button
      type={type}
      variant="outline"
      className=" capitalize rounded-xl cursor-pointer"
    >
      {text}
    </Button>
  );
}
