import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
}

export default meta

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <h3 className="font-semibold text-lg">Card Title</h3>
      <p className="text-sm text-gray-600">
        This card is part of youruikit, built in Vyoma Labs.
      </p>
    </Card>
  ),
}
