import Image from "next/image";
import Banner from "@/components/Banner";
import LiveAuction from "@/components/LiveAuction";
import LiveAuction2 from "@/components/LiveAuction2";
import hand from "@/assets/Hand.png";
import pleat from "@/assets/Pleat.png";
import LiveAuction3 from "@/components/LiveAuction3";

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
	ctaButton4: `w-[100%]  bg-gradient-to-r from-[#4745D0] to-[#2A27C9] rounded-lg text-sm text-white font-bold px-[1rem] py-[.6rem]`,
	logoWrapper: `flex align-center`,
};

export default function Home() {
	return (
		<main className="min-h-[100vh]">
			<Banner />

			{/* Live Auction */}
			<div className="py-8">
				<h1 className="text-center font-bold mb-16 text-2xl">
					Latest live auctions
				</h1>
				<LiveAuction />
			</div>

			{/* Call to action */}
			<div className="w-[100%] p-8 md:p-16">
				<div className="mx-[auto] max-w-screen-lg grid grid-cols-1 md:grid-cols-2">
					<div>
						<p className="tracking-wide text-xs text-primary-light mb-5">
							OVERLINE
						</p>

						<h1 className="text-5xl mb-5">
							Sapien ipsum scelerisque convallis fusce
						</h1>

						<p className="tracking-wide text-sm text-primary-light mb-10">
							Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
							pulvinar ultricies dolor feugiat aliquam commodo.
						</p>

						<div className={style.ctaButtons}>
							<button className={style.ctaButton2}>Get started</button>
							<button className={style.ctaButton1}>Learn more</button>
						</div>
					</div>

					<div className="bg-[url('../assets/Paint.png')] bg-center bg-contain bg-no-repeat min-h-[400px]" />
				</div>
			</div>

			{/* Section 3 */}
			<div className="w-[100%] p-8 md:p-16">
				<div className="mx-[auto] max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-x-5">
					<div className="rounded-xl border border-gray-500 p-4 flex flex-col justify-between">
						<p className="tracking-wide text-2xl font-semibold mb-4">
							Check out the hottest Sale offers
						</p>

						<LiveAuction2 />

						<button className={style.ctaButton3}>Show me more</button>
					</div>

					<div className="bg-gradient-to-b from-[#1C1D29] rounded-xl rounded-tl-none flex flex-col justify-between items-start p-4 relative">
						<div className="flex relative -top-12 items-center justify-center">
							<Image
								alt="hand"
								src={hand}
								// height={300}
								style={{
									width: "100%",
									height: "auto",
									maxWidth: "unset",
									zIndex: 1000,
								}}
							/>
						</div>

						<p className="tracking-wide text-lg font-semibold mb-4">
							Get started creating & selling your NFTs
						</p>

						<p className="tracking-wide text-sm text-primary-light mb-10">
							Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.
							Mi est sit.
						</p>

						<button className={style.ctaButton4}>Get started</button>

						<div className="flex absolute -top-[12px] left-0 items-center w-44">
							<Image
								alt="pleat"
								src={pleat}
								width={150}
								/* style={{
									width: "auto",
									height: "auto",
								}} */
							/>
						</div>
					</div>

					<div className="rounded-xl border border-gray-500 p-4">
						<p className="tracking-wide text-2xl font-semibold mb-4">
							Top NFT at a lower price
						</p>

						<LiveAuction3 />

						<button className={style.ctaButton3}>Show me more</button>
					</div>
				</div>
			</div>
		</main>
	);
}
