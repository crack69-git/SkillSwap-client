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
const PostATask = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  const listbox = (
    <>
      <ListBox.Item id="florida" textValue="Florida">
        Florida
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="delaware" textValue="Delaware">
        Delaware
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="california" textValue="California">
        California
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="texas" textValue="Texas">
        Texas
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="new-york" textValue="New York">
        New York
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="washington" textValue="Washington">
        Washington
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
              <Label>State</Label>
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
            <DateField className="max-w-96" name="date">
              <Label>Date</Label>
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
