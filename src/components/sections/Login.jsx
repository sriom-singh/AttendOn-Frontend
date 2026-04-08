import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
const Login = () => {
  return (
    <>
      <DialogHeader>
        <img
          src="/hero.png"
          alt="Login Illustration"
          className="w-20 h-20 mx-auto mb-4"
        />  
        <DialogTitle className={"font-sans-serif text-xl text-center"}>Welcome to AttendON</DialogTitle>
        <DialogDescription className={"text-center text-xs pb-4"}>
         Sign in to access your dashboard and stay on top of your workforce.
        </DialogDescription>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <Label htmlFor="name-1">Email</Label>
          <Input id="name-1" name="name" placeholder="example@gmail.com" />
        </Field>
        <Field>
          <Label htmlFor="username-1">Password</Label>
          <Input id="username-1" name="password" placeholder="********" />
        </Field>
      </FieldGroup>
      <div className="flex justify-between px-2">
      <p className={"text-[10px]  text-center text-muted-foreground cursor-pointer"}>New User?</p>
      <p className={"text-[10px] text-center text-muted-foreground cursor-pointer"}>Forgot password?</p>

      </div>
      <DialogFooter>
        {/* <DialogClose render={<Button variant="outline">Cancel</Button>} /> */}
        <Button type="submit">Sign In</Button>
      </DialogFooter>
    </>
  );
};

export default Login;

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
