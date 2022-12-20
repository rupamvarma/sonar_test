import { ComponentMeta, ComponentStory } from "@storybook/react";
import SliderComponent from "./slider";

export default {
  title: 'Atoms/Slider',
  Component: SliderComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof SliderComponent>

const Template: ComponentStory<typeof SliderComponent> = (args) => <SliderComponent/>
export const Primary = Template.bind({});

Primary.args ={
    size: "medium"
}