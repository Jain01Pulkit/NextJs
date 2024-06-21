"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "./styles.css";

const navlinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [input, setInput] = useState<string>("");
	return (
		<div>
			<div>
				<input value={input} onChange={(e: any) => setInput(e.target.value)} />
			</div>
			{navlinks.map((link) => {
				const isActive = pathname.startsWith(link.href);
				return (
					<Link
						href={link.href}
						key={link.name}
						className={isActive ? "font-bold mr-4" : "text-blue-500 mr04"}
					>
						{link?.name}
						<br></br>
					</Link>
				);
			})}
			{children}
		</div>
	);
}
