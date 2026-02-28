import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TableShowSelect({ show, setShow }) {
  return (
    <Select value={show} onValueChange={(value) => setShow(value)}>
      <SelectTrigger>
        <SelectValue placeholder="Show" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={10}>10</SelectItem>
          <SelectItem value={50}>50</SelectItem>
          <SelectItem value={100}>100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
