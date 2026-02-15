import { Button } from "@/components/ui/button";

export default function OutlineButton({
  text,
  type = "button",
  icon = {},
  ...props
}) {
  return (
    <Button
      type={type}
      variant="outline"
      className=" capitalize rounded-lg cursor-pointer"
      {...props}
    >
      {text} {icon}
    </Button>
  );
}
