import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
}

export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Primary Button",
  },
}

export const Ghost: StoryObj<typeof Button> = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
}
