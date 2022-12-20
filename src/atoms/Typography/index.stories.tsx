import { ComponentMeta, ComponentStory } from "@storybook/react";
import TypographyComponent from ".";

export default {
  title: 'Atoms/Typography',
  Component: TypographyComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof TypographyComponent>

const Template: ComponentStory<typeof TypographyComponent> = (args) => <TypographyComponent {...args}/>
export const HeadingLabel = Template.bind({});
export const DateLabel = Template.bind({});

HeadingLabel.args ={
 variant:"h4",
 text:"Good afternoon ✋"
}
DateLabel.args ={
variant:"subtitle1",
text:"April 02, 2021"
}