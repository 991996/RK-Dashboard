import { Button } from "@/components/ui/button";

export default function OutlineButton({
  type = "button",
  onClick,
  className = "",
  children = null,
  ...props
}) {
  return (
    <Button
      type={type}
      variant="outline"
      className={`${className} capitalize rounded-lg cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
