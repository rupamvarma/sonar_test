import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconComponent from "./icon";
import Vector from "/home/rupv/Desktop/sonar-test/src/assets/Vector.png";

export default {
  title: 'Atoms/Icon',
  Component: IconComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof IconComponent>

const Template: ComponentStory<typeof IconComponent> = (args) => <IconComponent {...args}/>
export const Default = Template.bind({});

Default.args ={
  src: Vector
}