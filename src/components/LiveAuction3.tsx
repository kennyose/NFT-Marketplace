"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setList } from "@/redux/features/nft-slice";
import LiveAuctionItem3 from "./LiveAuctionItem3";

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

export default function LiveAuction3() {
	const dispatch = useDispatch<AppDispatch>();
	const list = useAppSelector((state) => state.nftReducer.value.list);

	useEffect(() => {
		dispatch(setList({}));
	}, []);

	return (
		<div>
			{list.map((item: any, i) => (
				<LiveAuctionItem3 key={i} doc={item} />
			))}
		</div>
	);
}
