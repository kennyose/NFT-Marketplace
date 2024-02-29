import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/Logo.png";

const style = {
	wrapper: `w-[100%] px-[1.2rem] py-[1.2rem] flex justify-between flex-wrap`,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
	searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
	headerItems: `flex items-center justify-end`,
	headerItem: `text-primary-light px-4 text-sm font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
	headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
	headerButtons: `flex items-center justify-end`,
	headerButton1: `mr-4 outline outline-2 outline-gray-500 outline-offset-0 rounded-md text-sm text-primary-light font-bold px-[1rem] py-[.5rem] hover:text-white hover:outline-white`,
	headerButton2: `bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-md text-sm text-white font-bold px-[1rem] py-[.6rem]`,
	logoWrapper: `flex align-center`,
};

const Header = () => {
	return (
		<div className={style.wrapper}>
			<Link href="/" className={style.logoWrapper}>
				<div className={style.logoContainer}>
					<Image alt="logo" src={logo} height={25} />
				</div>
			</Link>

			{/* <div className={style.searchBar}>
				<div className={style.searchIcon}>
					<AiOutlineSearch />
				</div>
				<input
					className={style.searchInput}
					placeholder="Search items, collections, and accounts"
				/>
			</div> */}

			<div className={style.headerItems}>
				<Link href="#">
					<div className={style.headerItem}> Auctions </div>
				</Link>
				<Link href="#">
					<div className={style.headerItem}> Roadmap </div>
				</Link>
				<Link href="#">
					<div className={style.headerItem}> Discover </div>
				</Link>
				<Link href="#">
					<div className={style.headerItem}> Community </div>
				</Link>
			</div>

			<div className={style.headerButtons}>
				<button className={style.headerButton1}>Contact</button>
				<button className={style.headerButton2}>My account</button>
			</div>
		</div>
	);
};

export default Header;
