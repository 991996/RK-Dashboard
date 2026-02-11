import profile from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUserRound,
  MessageSquareMore,
  Wallet,
  CircleQuestionMark,
  LockKeyhole,
  LogOut,
} from "lucide-react";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-9 aspect-square cursor-pointer">
          <img src={profile} className="w-full h-full rounded-full" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 pl-2" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Welcome Raneem</DropdownMenuLabel>
          <DropdownMenuItem className="cursor-pointer">
            <CircleUserRound />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <MessageSquareMore />
            Messages
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Wallet />
            Pricing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <CircleQuestionMark />
            Help
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <LockKeyhole />
            Lock Screen
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="text-primary-red hover:text-primary-red! cursor-pointer">
            <LogOut className="text-primary-red" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
