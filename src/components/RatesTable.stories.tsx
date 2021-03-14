import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import RatesTable from "./RatesTable";

//👇 This default export determines where your story goes in the story list
export default {
  title: "RatesTable",
  component: RatesTable,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof RatesTable>> = (args) => (
  <RatesTable {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
