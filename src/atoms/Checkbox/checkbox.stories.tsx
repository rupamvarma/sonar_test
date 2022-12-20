import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckboxComponent from "./checkbox";

export default {
  title: 'Atoms/Checkbox',
  Component: CheckboxComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof CheckboxComponent>

const Template: ComponentStory<typeof CheckboxComponent> = (args) => <CheckboxComponent/>
export const Default = Template.bind({});
