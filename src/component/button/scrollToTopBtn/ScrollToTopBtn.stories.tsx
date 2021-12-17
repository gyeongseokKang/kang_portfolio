import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScrollToTopBtn from "./ScrollToTopBtn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ScrollToTopBtn",
  component: ScrollToTopBtn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ScrollToTopBtn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollToTopBtn> = (args) => <ScrollToTopBtn />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "ScrollToTopBtn",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "ScrollToTopBtn",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "ScrollToTopBtn",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "ScrollToTopBtn",
};
