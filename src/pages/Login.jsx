import React from "react";
import desktopBG from "@/assets/signinBG.png";
import { CardContent, Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import BlackLogo from "@/components/myComponents/BlackLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignIn() {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center">
      {/* Background image */}
      <img
        src={desktopBG}
        className=" absolute inset-0 object-cover w-full h-full -z-10"
      />
      {/*  */}
      <div className="w-full h-full absolute inset-0 bg-black/50 -z-5"></div>
      <Card>
        <CardContent className="flex flex-col gap-6 py-6">
          <BlackLogo />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Sign in</h1>
            <p className="text-gray-500">
              Enter your email address and password to access admin panel.
            </p>
          </div>
          {/* FORM */}
          <form>
            <FieldSet className="w-full">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Field>
                <Field>
                  <div className="flex justify-between">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Button
                      variant="ghost"
                      className="cursor-pointer hover:bg-transparent"
                    >
                      Reset password
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="terms-checkbox-basic"
                    name="terms-checkbox-basic"
                  />
                  <FieldLabel htmlFor="terms-checkbox-basic">
                    Remember me
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Button
              className="w-full mt-6 bg-primary-red/30 text-primary-red font-semibold
             cursor-pointer hover:bg-primary-red hover:text-white duration-300"
            >
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
