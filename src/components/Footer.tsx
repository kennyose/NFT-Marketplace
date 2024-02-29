import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Logo-2.png";
import facebookIcon from "@/assets/icons/Facebook.svg";
import githubIcon from "@/assets/icons/Github.svg";
import instagramIcon from "@/assets/icons/Instagram.svg";
import linkedInIcon from "@/assets/icons/LinkedIn.svg";
import twitterIcon from "@/assets/icons/Twitter.svg";

const style = {
	wrapper: `w-[100%] p-16`,
	footer: `mx-[auto] max-w-screen-lg grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-500 border border-gray-500 rounded-xl`,
	section: `p-8 h-80 flex flex-col justify-between`,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
	searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
	footerItems: `flex justify-start`,
	footerItems2: `flex flex-col justify-start`,
	footerItem: `text-primary-light px-2 text-xs  hover:text-white cursor-pointer`,
	footerItem2: `text-white py-2 font-bold text-xs hover:text-white cursor-pointer`,
	footerIcons: `flex justify-start`,
	footerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
	footerButtons: `flex items-center justify-end`,
	footerButton1: `mr-4 outline outline-2 outline-gray-500 outline-offset-0 rounded-md text-sm text-primary-light font-bold px-[1rem] py-[.5rem] hover:text-white hover:outline-white`,
	footerButton2: `bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-md text-sm text-white font-bold px-[.6rem] py-[.5rem] w-32`,
	formWrap: `bg-white rounded-lg flex`,
	form: `leading-8 flex-1 rounded-lg text-primary-light px-2 text-xs`,
	formButton: `text-primary text-xs font-bold px-3`,
};

const Footer = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.footer}>
				<div className={style.section}>
					<Link href="/">
						<div className={style.logoContainer}>
							<Image alt="logo" src={logo} height={23} />
						</div>
					</Link>

					<div className={style.footerItems}>
						<Link href="#">
							<div className={style.footerItem}> Support </div>
						</Link>
						<Link href="#">
							<div className={style.footerItem}> Term of service </div>
						</Link>
						<Link href="#">
							<div className={style.footerItem}> License </div>
						</Link>
					</div>
				</div>

				<div className={style.section}>
					<div className={style.footerItems2}>
						<Link href="#">
							<div className={style.footerItem2}> Auctions </div>
						</Link>
						<Link href="#">
							<div className={style.footerItem2}> Roadmap </div>
						</Link>
						<Link href="#">
							<div className={style.footerItem2}> Discover </div>
						</Link>
						<Link href="#">
							<div className={style.footerItem2}> Community </div>
						</Link>
					</div>

					<button className={style.footerButton2}>My account</button>

					<div className={style.footerIcons}>
						<Link href="#" className="mr-4">
							<Image alt="logo" src={facebookIcon} height={17} />
						</Link>
						<Link href="#" className="mr-4">
							<Image alt="logo" src={linkedInIcon} height={17} />
						</Link>
						<Link href="#" className="mr-4">
							<Image alt="logo" src={githubIcon} height={17} />
						</Link>
						<Link href="#" className="mr-4">
							<Image alt="logo" src={twitterIcon} height={17} />
						</Link>
						<Link href="#" className="mr-4">
							<Image alt="logo" src={instagramIcon} height={17} />
						</Link>
					</div>
				</div>

				<div className={style.section}>
					<p className="text-xs text-primary-light">
						Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
						velit, sed egestas in. Id nam semper dolor tellus vulputate eget
						turpis.
					</p>

					<div className={style.formWrap}>
						<input className={style.form} placeholder="Newsletter" />
						<button className={style.formButton}>Sign in</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
