import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
}

export default meta

export const Default: StoryObj<typeof Badge> = {
  args: {
    children: "Default",
  },
}

export const Success: StoryObj<typeof Badge> = {
  args: {
    variant: "success",
    children: "Success",
  },
}

export const Warning: StoryObj<typeof Badge> = {
  args: {
    variant: "warning",
    children: "Warning",
  },
}

export const Danger: StoryObj<typeof Badge> = {
  args: {
    variant: "danger",
    children: "Danger",
  },
}
