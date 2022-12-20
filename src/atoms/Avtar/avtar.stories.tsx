import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvtarComponent from "./avtar";

export default {
  title: 'Atoms/Avtar',
  Component: AvtarComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof AvtarComponent>

const Template: ComponentStory<typeof AvtarComponent> = (args) => <AvtarComponent {...args}/>
export const Profile = Template.bind({});

Profile.args ={
  src: require('/public/a.png'),
  sx: {
    borderRadius: '12px'
  }
 }