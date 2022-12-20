import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageComponent from "./image";
import Banner from "/home/rupv/rupam-dev-task/seeder-app/react-seeder-app/src/assets/image69.png";

export default {
  title: 'Atoms/Image',
  Component: ImageComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof ImageComponent>

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent {...args}/>
export const Default = Template.bind({});

Default.args ={
  src: Banner
}