"use client";
import React from "react";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  DateField,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { createTask } from "@/lib/actions/tasks";
import { redirect } from "next/navigation";
const PostATask = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const tasks = {
      TaskTitle: data.TaskTitle,
      category: data.category,
      budget: data.budget,
      createdAt: new Date().toISOString(),
      deadline: data.deadline,
      status: "Open",
      description: data.description,
    };

    const res = await createTask(tasks);
    console.log(res);
    if (res) {
      alert("Task created successfully!");
      redirect("/dashboard/client/my-tasks");
    } else {
      alert("Failed to create task.");
    }
  };
  const listbox = (
    <>
      <ListBox.Item id="web-dev" textValue="Web &amp; App Development">
        Web &amp; App Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="design-creative" textValue="Design &amp; Creative">
        Design &amp; Creative
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="writing-translation"
        textValue="Writing &amp; Translation"
      >
        Writing &amp; Translation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="digital-marketing" textValue="Digital Marketing">
        Digital Marketing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="video-animation" textValue="Video &amp; Animation">
        Video &amp; Animation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="data-ai" textValue="Data Science &amp; AI">
        Data Science &amp; AI
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="coaching-education"
        textValue="Coaching &amp; Education"
      >
        Coaching &amp; Education
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="business-consulting"
        textValue="Business &amp; Consulting"
      >
        Business &amp; Consulting
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="music-audio" textValue="Music &amp; Audio">
        Music &amp; Audio
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="it-cybersecurity" textValue="IT &amp; Cybersecurity">
        IT &amp; Cybersecurity
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="virtual-assistant" textValue="Virtual Assistant">
        Virtual Assistant
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="lifestyle-fitness" textValue="Lifestyle &amp; Fitness">
        Lifestyle &amp; Fitness
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div>
      <Form className="w-full max-w-96 mb-10" onSubmit={onSubmit}>
        <Fieldset>
          <FieldGroup>
            <TextField isRequired name="TaskTitle">
              <Label>Task Title</Label>
              <Input placeholder="Enter Task Title" />
              <FieldError />
            </TextField>
            <Select
              className="max-w-96"
              name="category"
              placeholder="Select one"
            >
              <Label>Category</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>{listbox}</ListBox>
              </Select.Popover>
            </Select>
            <TextField isRequired name="budget" type="text">
              <Label>Budget</Label>
              <Input placeholder="$00.00" />
              <FieldError />
            </TextField>
            <DateField className="max-w-96" name="deadline">
              <Label>Deadline</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField>
            <TextField isRequired name="description">
              <Label>Description</Label>
              <TextArea placeholder="Enter Task Description" />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default PostATask;
