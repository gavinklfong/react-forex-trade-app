// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import RateItem from "./RateItem";

//👇 This default export determines where your story goes in the story list
export default {
  title: "RateItem",
  component: RateItem,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof RateItem>> = (args) => (
  <RateItem {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
