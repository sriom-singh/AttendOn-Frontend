import React from "react";
import { Button } from "@/components/ui/button";
import { IdCardLanyard, ShieldUser, UserPen } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orgSchema } from "../../schemas/schema.js";
import { useAuthStore } from "@/store/useAuthStore.js";
import { useNavigate } from "react-router-dom";
import { Textarea } from "../ui/textarea.jsx";
import { useOrgStore } from "@/store/useOrgStore.js";

const CreateOrg = () => {
  const createOrg = useOrgStore((s) => s.addOrg);
  const { user } = useAuthStore();
  const { org } = useOrgStore();
  // console.log(user);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(orgSchema),
    defaultValues: {
      createdBy: user?._id || "",
    },
  });

  //   const selectedRole = watch("role");

  const onSubmit = async (data) => {
    try {
      console.log("Submitting:", data);

      const res = await createOrg(data);

      console.log("Response:", res);

      if (res?.data) {
        navigate("/contact");
      } else {
        console.log("Failed:", res);
      }
    } catch (err) {
      console.error("Error:", err);
    }

    // ✅ redirect only if success
    // if (res?.success) {
    //   navigate("/login"); // or "/login"
    // }
  };
  return (
    <Card className={"bg-transparent"}>
      <CardHeader>
        <CardTitle className="text-2xl font-sans-serif font-bold">
          Create Organization
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Add your Organization to get started
        </CardDescription>
      </CardHeader>
      {/* Form */}
      <CardContent className={"px-6"}>
        <form onSubmit={handleSubmit(onSubmit,(err) => console.log("Validation Failed:", err))}  className="flex flex-col gap-4">
          {" "}
          <FieldGroup>
            <Field>
              <Label htmlFor="fname" className={"mb-2 "}>
                Name
              </Label>

              <Input {...register("name")} placeholder="John" />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </Field>
            <Field>
              <Label htmlFor="password">Description</Label>
              <Textarea
                {...register("description")}
                placeholder="Min 8 characters"
              />
              {errors.description && (
                <p className="text-red-500 text-xs">
                  {errors.description.message}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="name-1">Work email</Label>
              <Input {...register("contactEmail")} placeholder="you@company.com" />
              {errors.contactEmail && (
                <p className="text-red-500 text-xs">{errors.contactEmail.message}</p>
              )}
            </Field>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
                onClick={() => console.log("clicked")}
            >
              Create Organization
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className={"flex-col gap-2"}>
        {/* <p className="text-center mx-auto text-muted-foreground">
          Already have an account?{" "}
          <Link className="text-primary/80" to={"/login"}>
            Sign in →
          </Link>
        </p> */}
        <p className="text-[10px] text-center text-muted-foreground">
          By creating organization you agree to our Terms of Service and Privacy
          Policy
        </p>
      </CardFooter>
    </Card>
  );
};

export default CreateOrg;
