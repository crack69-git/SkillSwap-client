"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Select,
  Option,
  TextField,
  ListBox,
  RadioGroup,
  Radio,
} from "@heroui/react";
import { useState } from "react";
const RegisterPage = () => {
  const [value, setValue] = useState("option1");
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
  };
  return (
    <div>
      <div className="w-11/12 mx-auto flex items-center justify-center my-20">
        <Form
          className="flex w-100 flex-col gap-4 border border-gray-300 p-6 rounded-2xl shadow-lg"
          onSubmit={onSubmit}
        >
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <TextField isRequired className="w-full" name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <Description>Enter your full name</Description>
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
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
          <TextField className="w-full" name="imageLink">
            <Label>Image Link</Label>
            <Input placeholder="eg: https://example.com/image.jpg" />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div>
            <input type="radio" id="admin" name="role" value="admin" />
            <label htmlFor="admin">Admin</label>

            <input
              type="radio"
              id="freelancer"
              name="role"
              value="freelancer"
              className="ml-4"
            />
            <label htmlFor="Freelancer">Freelancer</label>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>

          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
