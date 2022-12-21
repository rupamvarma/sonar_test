import { ThemeProvider } from "@emotion/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../theme";
import IconComponent from "../Icon/icon";
import ButtonComponent from "./Index";
import Vector from "/home/rupv/Desktop/sonar-test/src/assets/Vector.png";

export default {
  title: 'Atoms/Button',
  Component: ButtonComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) =>
<ThemeProvider theme={theme}>
  <ButtonComponent {...args}/>
</ThemeProvider>
export const NewCashKick = Template.bind({});
export const HomeIconButton = Template.bind({});


NewCashKick.args ={
 children: "New Cash Kick",
 variant: "contained",
 size: "large",
}
HomeIconButton.args ={
    children: "Home",
    variant: "contained",
    size: "large",
    color: "secondary",
    startIcon: <IconComponent src={Vector}/>
}