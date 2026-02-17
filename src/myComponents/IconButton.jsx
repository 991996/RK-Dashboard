import { Button } from "@/components/ui/button";

export default function IconButton({ icon, className, onClick }) {
  return (
    <Button
      className={`${className} cursor-pointer hover:text-white`}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}
