import Image from "next/image";
import Link from "next/link";
import React from "react";
import shape from "@/assets/Shape.png";
import shape2 from "@/assets/Shape-2.png";
import searchIcon from "@/assets/icons/Search.svg";
import ritterSportIcon from "@/assets/icons/RitterSport.svg";
import nikeIcon from "@/assets/icons/Nike.svg";
import adidasIcon from "@/assets/icons/Adidas.svg";
import newHollandIcon from "@/assets/icons/NewHolland.svg";

const style = {
	wrapper: `w-[100%] h-[100vh] p-16 bg-[url('../assets/Background.png')] bg-center bg-cover flex flex-col items-center justify-center`,
	content: `flex flex-col justify-center items-center z-40`,
	opt: `py-10`,
	brandItem: `mx-8`,
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
	formWrap: `bg-white rounded-xl flex my-8 py-3 px-5 `,
	form: `leading-8 flex-1 rounded-lg text-primary-light text-xs focus:outline-0 w-[200px]`,
	formButton: `text-primary text-xs font-bold pl-5`,
};

const Banner = () => {
	return (
		<div className={style.wrapper}>
			<div className="bg-[url('../assets/Squares.png')] bg-center bg-cover w-[100vw] absolute h-[70vh] z-1" />

			<div className={style.content}>
				<p className="text-xs text-center text-primary-light tracking-wider">
					NON FUNGIBLE TOKENS
				</p>

				<div className="py-8">
					<div className="flex relative -left-6 items-center">
						<h1 className="text-7xl font-bold tracking-wider">A new NFT</h1>
						<Image
							alt="shape"
							src={shape}
							// height={20}
							style={{
								width: "auto",
								height: "55px",
							}}
							className="ml-1"
						/>
					</div>

					<div className="flex relative -right-6 items-center">
						<Image
							alt="shape"
							src={shape2}
							// height={20}
							style={{
								width: "auto",
								height: "45px",
							}}
							className="ml-1"
						/>
						<h1 className="text-7xl font-bold tracking-wider">Experience</h1>
					</div>
				</div>

				<p className="text-xs text-center text-primary-light tracking-wider">
					Discover, collect and sell
				</p>

				<div className={style.formWrap}>
					<input
						className={style.form}
						placeholder="Items, collections and creators"
					/>

					<select className="text-primary-light border-l text-xs w-32 px-2">
						<option className={style.opt} disabled={true} value="">
							Category
						</option>
						<option className={style.opt} value="someOption">
							Some option
						</option>
						<option className={style.opt} value="otherOption">
							Other option
						</option>
					</select>

					<button className={style.formButton}>
						<Image height={17} src={searchIcon} alt="Search" />
					</button>
				</div>
			</div>

			<div className="flex justify-between items-center mt-24 z-41">
				<Image
					className={style.brandItem}
					height={25}
					src={ritterSportIcon}
					alt="Ritter Sport"
				/>
				<Image
					className={style.brandItem}
					height={25}
					src={nikeIcon}
					alt="Nike"
				/>
				<Image
					className={style.brandItem}
					height={25}
					src={adidasIcon}
					alt="Adidas"
				/>
				<Image
					className={style.brandItem}
					height={25}
					src={newHollandIcon}
					alt="New Holland"
				/>
			</div>
		</div>
	);
};

export default Banner;
