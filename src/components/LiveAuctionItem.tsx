"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import shape2 from "@/assets/Shape-2.png";
import timerIcon from "@/assets/icons/Timer.svg";
import heartIcon from "@/assets/icons/Heart.svg";
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

const LiveAuctionItem = ({ doc }: { doc: any }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const target = new Date(doc.expiresAt);

		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setDays(d);
			setHours(h);
			setMinutes(m);
			setSeconds(s);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Link href={`/assets/${doc.id}`}>
			<div className="rounded-xl border border-gray-500 p-4 w-[100%] md:w-[370px]">
				<Image
					alt="shape"
					src={doc.image}
					className="h-[380px] rounded-xl"
					width={100}
					height={400}
					quality={100}
					style={{
						width: "100%",
					}}
				/>

				<div className="flex justify-between mt-4">
					<p className="text-sm font-semibold flex-1">{doc.title}</p>
					<div className="px-3 py-2 bg-[#514CFF26] h-8 rounded ml-3">
						<p className="text-xs text-primary">{`${doc.price} ETH`}</p>
					</div>
				</div>

				<div className="flex items-center py-5 border-b border-gray-500">
					<Image alt="timer" src={timerIcon} height={23} />
					<p className="text-white text-xs leading-8 ml-2">{`${
						hours > 0 ? hours + ":" : ""
					}${minutes}:${seconds} ${hours > 0 ? "hour" : "min"} left`}</p>
				</div>

				<div className="flex py-4 justify-between">
					<div className="flex flex-1 items-center">
						<div className="flex flex-nowrap max-w-24">
							{doc.bids.list.map((bid: any, i: number) => {
								return (
									<Image
										key={i}
										alt="avatar"
										src={bid.image}
										height={25}
										width={25}
										className={`rounded-full relative -left-${i}`}
									/>
								);
							})}
						</div>

						<p className="text-primary-light text-xs ml-2">{`${doc.bids.total} people are bidding`}</p>
					</div>

					<div className="flex items-center">
						<Image alt="heart" src={heartIcon} height={23} />
						<p className="text-primary-light text-xs ml-2">{`${doc.likes}`}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default LiveAuctionItem;
