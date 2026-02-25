import { Button } from "@/components/ui/button";

export default function OutlineButton({
  text,
  type = "button",
  icon = null,
  onClick,
  ...props
}) {
  return (
    <Button
      type={type}
      variant="outline"
      className=" capitalize rounded-lg cursor-pointer"
      onClick={onClick}
      {...props}
    >
      {text} {icon}
    </Button>
  );
}
