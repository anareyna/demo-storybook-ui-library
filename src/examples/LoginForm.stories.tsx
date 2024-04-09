import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
	title: "Examples/LoginForm",
	component: LoginForm,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
