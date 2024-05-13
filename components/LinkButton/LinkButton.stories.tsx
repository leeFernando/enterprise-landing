import type { Meta, StoryObj } from "@storybook/react"
import { LinkButton } from "./LinkButton"

const meta: Meta<typeof LinkButton> = {
  title: "Link Button",
  component: LinkButton,
  args: {
    intent: "primary",
    underline: false,
    children: "LinkButton",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof LinkButton>

export const Default: Story = {
  render: (args) => <LinkButton {...args} />,
}

export default meta
