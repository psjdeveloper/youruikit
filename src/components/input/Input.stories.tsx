import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
}

export default meta

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Type something...",
  },
}

export const Disabled: StoryObj<typeof Input> = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const WithValue: StoryObj<typeof Input> = {
  args: {
    value: "Hello Vyoma Labs",
  },
}
