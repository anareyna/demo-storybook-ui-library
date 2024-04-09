import { Box, Button, Input, Stack, Text } from "@/components";

export const LoginForm = () => {
	return (
		<Box className="py-4 px-8 border border-gray-300 rounded-xl">
			<Stack className="gap-4">
				<Text
					as="h2"
					weight="bold"
					align="center"
					size="3xl"
					className="mb-2"
				>
					Login
				</Text>

				<Text
					as="span"
					emphasis="low"
					size="sm"
					align={"center"}
					className="text-gray-600"
				>
					Please enter your credentials to login
				</Text>

				<Text
					as="label"
					htmlFor="username"
					size={"sm"}
					weight={"medium"}
					className="mb-1.5"
				>
					Username
				</Text>
				<Input id="username" type="username" placeholder="Username" />

				<Text
					as="label"
					htmlFor="password"
					size={"sm"}
					weight={"medium"}
					className="mb-1.5"
				>
					Password
				</Text>
				<Input id="password" type="password" placeholder="Password" />

				<Button type="submit" variant={"solid"}>
					Login
				</Button>
			</Stack>
		</Box>
	);
};
