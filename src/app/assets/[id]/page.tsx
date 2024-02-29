"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setDoc } from "@/redux/features/nft-slice";
import { useEffect, useState } from "react";

const style = {
	wrapper: `w-[100%] px-[1.2rem] py-[1.2rem] flex justify-between flex-wrap`,
	logoContainer: `flex items-center cursor-pointer`,
	logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
	searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
	searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
	searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
	ctaItems: `flex items-center justify-end`,
	ctaItem: `text-primary-light px-4 text-sm font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
	ctaIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
	ctaButtons: `flex items-center`,
	ctaButton1: `mr-4 outline outline-2 outline-gray-500 outline-offset-0 rounded-lg text-sm ml-3 text-primary-light font-bold px-[1rem] py-[.5rem] hover:text-white hover:outline-white`,
	ctaButton2: `bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg text-sm text-white font-bold px-[1rem] py-[.6rem]`,
	ctaButton3: `mt-3 w-[100%] outline outline-2 outline-gray-500 outline-offset-0 rounded-lg text-sm text-primary-light font-bold px-[1rem] py-[.5rem] hover:text-white hover:outline-white`,
	ctaButton4: `w-[100%] mt-3 bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg text-sm text-white font-bold px-[1rem] py-[.6rem]`,
	logoWrapper: `flex align-center`,
};

export default function AssetDetails({ params }: { params: { id: string } }) {
	const dispatch = useDispatch<AppDispatch>();
	const doc = useAppSelector((state) => state.nftReducer.value.doc);

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		dispatch(setDoc(params.id));

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
		<main className="min-h-[100vh]">
			<div className="w-[100%] p-8 md:p-16">
				<div className="mx-[auto] max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-x-5 rounded-3xl border border-gray-400 p-4">
					<div>
						<Image
							alt="shape"
							src={doc.image}
							className="h-[580px] rounded-xl"
							width={100}
							height={400}
							quality={100}
							style={{
								width: "100%",
							}}
						/>
					</div>

					<div className="p-8 flex flex-col items-start">
						<div>
							<h1 className="text-2xl font-semibold">{doc.title}</h1>

							<p className="mt-3  text-sm text-primary-light">
								{doc.description}
							</p>
						</div>

						<div className="flex mt-10">
							<div className="flex items-center">
								<Image
									alt="avatar"
									src={doc.creator.avatar}
									height={40}
									width={40}
									className={`rounded-full`}
								/>

								<div className="ml-5">
									<p className="tracking-wide text-sm text-primary-light">
										Creator
									</p>

									<p className="tracking-wide font-semibold text-sm">
										{doc.creator.name}
									</p>
								</div>
							</div>

							<div className="flex items-center ml-10">
								<Image
									alt="avatar"
									src={doc.collection.avatar}
									height={40}
									width={40}
									className={`rounded-full`}
								/>

								<div className="ml-5">
									<p className="tracking-wide text-sm text-primary-light">
										Collection
									</p>

									<p className="tracking-wide font-semibold text-sm">
										{doc.collection.name}
									</p>
								</div>
							</div>
						</div>

						<div className="w-[100%] border border-gray-400 p-8 rounded-xl mt-10 bg-gradient-to-b from-[#FFFFFF12]">
							<div className="flex justify-between">
								<div>
									<p className="text-sm mb-3 text-primary-light">
										Current price
									</p>

									<div className="flex items-end">
										<p className="text-5xl font-semibold">{`${doc.price}`}</p>
										<p className="text-xl font-semibold ml-2">{`ETH`}</p>
									</div>
								</div>

								<div>
									<p className="text-sm mb-3 text-primary-light">
										Current price
									</p>

									<div className="flex items-end">
										<p className="text-xl font-semibold">{`${
											hours > 0 ? hours + ":" : ""
										}${minutes}:${seconds}`}</p>
										<p className="text-xl font-semibold ml-2">{`${
											hours > 0 ? "hour" : "min"
										}`}</p>
									</div>

									<p className="text-sm mb-3 text-primary-light">
										(01.01.2022 - 01:40:47)
									</p>
								</div>
							</div>

							<button className={style.ctaButton4}>Place a bid</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
