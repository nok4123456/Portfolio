import React from "react"
import Header from "../component/common/Header"
import { Story, Meta } from "@storybook/react/types-6-0"

export default {
	title: "Header",
	component: Header,
} as Meta

const Template: Story<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
	task: {
		title: "Test Task",
	},
}
