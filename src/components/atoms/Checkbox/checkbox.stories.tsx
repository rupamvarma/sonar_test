import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../theme";
import CheckboxComponent from "./checkbox";

export default {
  title: 'Atoms/Checkbox',
  Component: CheckboxComponent,
  argTypes: {
        backgroundColor: { control: 'color' },
        size: {control: 'size'}
      },
} as ComponentMeta<typeof CheckboxComponent>

const Template: ComponentStory<typeof CheckboxComponent> = (args) => 
<ThemeProvider theme={theme}>
  <CheckboxComponent {...args}/>
</ThemeProvider>
export const Default = Template.bind({});
