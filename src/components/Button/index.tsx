import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
const buttonStyles = cva(["w-full", "", "rounded-md", "font-semibold"], {
	variants: {
		variant: {
			solid: "bg-primary-500 text-white",
			outline: "border-2",
			ghost: "transition-colors duration-300",
		},
		size: {
			sm: "px-4 py-2 text-sm",
			md: "px-6 py-3 text-md",
			lg: "px-8 py-4 text-lg",
		},
		colorScheme: {
			primary: " bg-primary-00",
		},
	},
	compoundVariants: [
		{
			variant: "solid",
			colorScheme: "primary",
			className: "",
		},
		{
			variant: "outline",
			colorScheme: "primary",
			className:
				"border-primary-500 bg-transparent text-primary-600 hover:bg-primary-100",
		},
		{
			variant: "ghost",
			colorScheme: "primary",
			className: "text-primary-600 bg-transparent hover:bg-primary-50",
		},
	],
	defaultVariants: {
		variant: "solid",
		size: "md",
	},
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, colorScheme, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					buttonStyles({ variant, size, colorScheme, className })
				)}
				{...props}
			/>
		);
	}
);
