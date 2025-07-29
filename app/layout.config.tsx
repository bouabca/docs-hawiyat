import type { BaseLayoutProps } from "fumadocs-ui/layout";
import { GlobeIcon, HeartIcon } from "lucide-react";

export const Logo = () => {
	return (
		<svg width="92" height="77" viewBox="0 0 92 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="!size-8 lg:!size-10">
			<path d="M0 19.7065V57.5747L33.1183 38.6408L0 19.7065Z" fill="#BFBFBF" />
			<path d="M33.1183 0.772461V38.6406L0 19.7067L33.1183 0.772461Z" fill="#BCD3D5" />
			<path d="M66.2352 19.7064L33.1152 0.772461V38.6406L66.2352 19.7064Z" fill="white" />
			<path d="M66.2352 19.7065V57.5747L33.1152 38.6408L66.2352 19.7065Z" fill="#828485" />
			<path d="M33.1152 38.6416V76.5098L66.2352 57.5755L33.1152 38.6416Z" fill="#828485" />
			<path d="M0 57.5755L33.1183 76.5098V38.6416L0 57.5755Z" fill="#BFBFBF" />
			<path d="M33.1152 76.508L91.9999 64.4193L68.3619 46.5902L66.2352 45.0581V57.5738L33.1152 76.508Z" fill="url(#paint0_linear_372_1635)" />
			<defs>
				<linearGradient id="paint0_linear_372_1635" x1="91.9999" y1="57.2102" x2="33.1326" y2="64.4959" gradientUnits="userSpaceOnUse">
					<stop stop-color="#C5BDBD" />
					<stop offset="1" stop-color="#7C7878" />
				</linearGradient>
			</defs>
		</svg>

	);
};

export const baseOptions: BaseLayoutProps = {
	githubUrl: "https://github.com/bouabca/hawiyat-platform",
	nav: {
		url: "/get-started/introduction",
		title: (
			<>
				<Logo />
				<span className="text-foreground">Hawiyat</span>
			</>
		),
	},
	links: [
		{
			text: "Website",
			url: "https://www.hawiyat.org",
			active: "nested-url",
			icon: <GlobeIcon />,
		},
		{
			text: "Discord",
			url: "https://discord.com/",
			active: "nested-url",
			icon: (
				<>
					<svg
						role="img"
						className="size-6 "
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
					</svg>
				</>
			),
		},
		{
			text: "Support",
			url: "https://www.hawiyat.org/contact",
			active: "nested-url",
			icon: (
				<>
					<HeartIcon fill="currentColor" />
				</>
			),
		},
	],
};
