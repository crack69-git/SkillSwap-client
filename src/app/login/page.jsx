"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
const page = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    console.log(formValue);
    const { data: res, error } = await authClient.signIn.email({
      email: formValue.email, // required
      password: formValue.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    // console.log("Login response:", res.user);
    if (res) {
      if (res?.user?.userState === "blocked") {
        alert("Your account is blocked. Please contact support.");
        return;
      }
      alert("Login successful!");
      router.push("/");
    } else {
      alert("Login failed! please try again.");
    }
  };
  const handleGoogle = async () => {
    console.log("button clicked");
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="w-11/12 mx-auto flex items-center justify-center my-20">
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-6 rounded-2xl shadow-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <TextField
          isRequired
          name="email"
          type="email"
          defaultValue="admin1@taskhive.com"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          defaultValue="admin1@taskhive.com"
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />

          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="flex items-center gap-2 ">
          <p className="bg-gray-500 h-0.5 w-full"></p>
          <p>or</p>
          <p className="bg-gray-500 h-0.5 w-full"></p>
        </div>

        <Button onClick={handleGoogle} variant="outline" className="w-full">
          <FcGoogle />
          Sign-in with GOOGLE
        </Button>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </Form>
    </div>
  );
};

export default page;
