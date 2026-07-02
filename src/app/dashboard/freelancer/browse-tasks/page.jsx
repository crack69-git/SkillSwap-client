import OpenTask from "@/Components/Shared/freelancer/OpenTask";
import { getOpenTasks } from "@/lib/actions/freelancerProposals";
import { Input, Label, ListBox, Select } from "@heroui/react";
import React from "react";
import { RiFilter3Line } from "react-icons/ri";

const BrowseTasks = async ({ searchParams }) => {
  const params = await searchParams;
  const name = params.name || "";
  const skill = params.skill || "";
  const data = await getOpenTasks(name, skill);
  //   console.log("Open Tasks:", data);
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
    <div className="my-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold mb-10">Browse Tasks</h2>
      <form method="GET" className="flex gap-3 my-5">
        <div className="flex flex-col gap-1">
          <Label htmlFor="input-type-email">Name</Label>
          <Input
            name="name"
            defaultValue={name}
            placeholder="Enter Freelancer name"
            type="text"
          />
        </div>

        <Select
          name="skill"
          defaultSelectedKeys={skill ? [skill] : []}
          className="w-[256px]"
          placeholder="Select"
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded flex items-center gap-2 cursor-pointer  hover:bg-blue-600 transition-colors duration-300"
        >
          <RiFilter3Line />
          Filter
        </button>
      </form>
      <div className="flex flex-col gap-5">
        {data.length > 0 ? (
          data.map((task) => <OpenTask key={task._id} task={task} />)
        ) : (
          <div className="text-gray-500 text-lg">
            No open tasks available at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
