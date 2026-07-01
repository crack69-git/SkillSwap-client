"use client";
import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  Select,
  TextField,
} from "@heroui/react";
import { freelancerPatch } from "@/lib/actions/freelancerProposals";
const EditProfileSection = ({ user }) => {
  const [skills, setSkills] = useState([]);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.skills = skills;
    console.log(data);
    const res = await freelancerPatch(user.id, data);
    if (res.success) {
      alert("Profile updated successfully!");
    } else {
      alert("Something went wrong!");
    }
  };

  const selectOptions = (
    <>
      <ListBox.Item id="frontend-development" textValue="Frontend Development">
        Frontend Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="backend-development" textValue="Backend Development">
        Backend Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="full-stack-development"
        textValue="Full Stack Development"
      >
        Full Stack Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="mobile-app-development"
        textValue="Mobile App Development"
      >
        Mobile App Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="game-development" textValue="Game Development">
        Game Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="ui-ux-design" textValue="UI/UX Design">
        UI/UX Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="graphic-design" textValue="Graphic Design">
        Graphic Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="web-design" textValue="Web Design">
        Web Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="motion-graphics" textValue="Motion Graphics">
        Motion Graphics
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="video-editing" textValue="Video Editing">
        Video Editing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="animation" textValue="Animation">
        Animation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="digital-illustration" textValue="Digital Illustration">
        Digital Illustration
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="content-writing" textValue="Content Writing">
        Content Writing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="copywriting" textValue="Copywriting">
        Copywriting
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="technical-writing" textValue="Technical Writing">
        Technical Writing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="translation" textValue="Translation">
        Translation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="teaching-tutoring" textValue="Teaching & Tutoring">
        Teaching & Tutoring
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="language-learning" textValue="Language Learning">
        Language Learning
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="music-lessons" textValue="Music Lessons">
        Music Lessons
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="data-science" textValue="Data Science">
        Data Science
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="machine-learning" textValue="Machine Learning">
        Machine Learning
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="artificial-intelligence"
        textValue="Artificial Intelligence"
      >
        Artificial Intelligence
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="cybersecurity" textValue="Cybersecurity">
        Cybersecurity
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="cloud-computing" textValue="Cloud Computing">
        Cloud Computing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="devops" textValue="DevOps">
        DevOps
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="database-management" textValue="Database Management">
        Database Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="seo" textValue="SEO">
        SEO
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="digital-marketing" textValue="Digital Marketing">
        Digital Marketing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="social-media-management"
        textValue="Social Media Management"
      >
        Social Media Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="project-management" textValue="Project Management">
        Project Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="virtual-assistance" textValue="Virtual Assistance">
        Virtual Assistance
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="business-consulting" textValue="Business Consulting">
        Business Consulting
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="accounting-finance" textValue="Accounting & Finance">
        Accounting & Finance
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="photography" textValue="Photography">
        Photography
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="3d-modeling" textValue="3D Modeling">
        3D Modeling
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="product-design" textValue="Product Design">
        Product Design
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );

  return (
    <div>
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <Fieldset>
          <FieldGroup>
            <TextField name="name">
              <Label>Name</Label>
              <Input placeholder={user?.name} />
              <FieldError />
            </TextField>
            <TextField name="image">
              <Label>Image Link</Label>
              <Input placeholder={user?.image} />
              <FieldError />
            </TextField>
            <Select
              name="skills"
              className="w-[256px]"
              placeholder="Select skills"
              selectionMode="multiple"
              value={skills}
              onChange={(value) => {
                console.log(value);
                setSkills(Array.isArray(value) ? value : []);
              }}
            >
              <Label>Skills</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>{selectOptions}</ListBox>
              </Select.Popover>
            </Select>
            <TextField name="hourlyRate" type="number">
              <Label>Hourly Rate</Label>
              <Input placeholder={user?.hourlyRate} />
              <FieldError />
            </TextField>
            <TextField name="bio">
              <Label>Bio</Label>
              <TextArea placeholder={user?.bio} />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">Save changes</Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default EditProfileSection;
