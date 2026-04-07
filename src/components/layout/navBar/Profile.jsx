import profile from "@/assets/profile.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/store/authSlice";
import {
  CircleUserRound,
  MessageSquareMore,
  Wallet,
  CircleQuestionMark,
  LockKeyhole,
  LogOut,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin", { replace: true });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-9 aspect-square cursor-pointer">
          <img src={profile} className="w-full h-full rounded-full" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 pl-2" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Welcome {user.name}</DropdownMenuLabel>
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
          <DropdownMenuItem
            className="text-primary-red hover:text-primary-red! cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="text-primary-red" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
