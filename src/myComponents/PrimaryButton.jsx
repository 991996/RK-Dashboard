import { Button } from "@/components/ui/button";

export default function PrimaryButton({ text }) {
  return (
    <Button className=" capitalize bg-primary-red rounded-xl cursor-pointer">
      {text}
    </Button>
  );
}
