import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	value: NftState;
};

type NftState = {
	list: Partial<Nft>[];
	doc: Nft;
};

type Nft = {
	title: string;
	description: string;
	creator: { name: string; avatar: string };
	image: string;
	price: number;
	collection: { name: string; avatar: string };
	expiresAt: string;
	likes: number;
	bids: {
		total: number;
		list: { image: string }[];
	};
};

const initialState = {
	value: {
		list: [],
		doc: {
			title: "Dui accumsan leo vestibulum ornare",
			description:
				"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
			creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
			collection: { name: "Afterlife", avatar: "/avatar/Collection.png" },
			image: "/nft/1.png",
			price: 6.78,
			expiresAt: "2024-02-29T11:05:05.923Z",
			likes: 570,
			bids: {
				total: 101,
				list: [
					{
						image: "/bid/01.png",
					},
					{
						image: "/bid/02.png",
					},
					{
						image: "/bid/03.png",
					},
					{
						image: "/bid/04.png",
					},
				],
			},
		},
	},
} as InitialState;

export const nft = createSlice({
	name: "nft",
	initialState,
	reducers: {
		setList: (state, action: PayloadAction<any>) => {
			return {
				value: {
					...state.value,
					list: [
						{
							id: 1,
							title: "Tristique diam a, enim, eros tellus. Viverra etiam",
							description:
								"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
							creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
							collection: {
								name: "Afterlife",
								avatar: "/avatar/Collection.png",
							},
							image: "/nft/1.png",
							price: 2.55,
							expiresAt: "2024-02-29T14:05:05.923Z",
							likes: 54,
							bids: {
								total: 14,
								list: [
									{
										image: "/bid/01.png",
									},
									{
										image: "/bid/02.png",
									},
									{
										image: "/bid/03.png",
									},
									{
										image: "/bid/04.png",
									},
								],
							},
						},
						{
							id: 2,
							title: "Vulputate felis purus viverra morbi facilisi eget",
							description:
								"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
							creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
							collection: {
								name: "Afterlife",
								avatar: "/avatar/Collection.png",
							},
							image: "/nft/2.png",
							price: 3.19,
							expiresAt: "2024-02-29T18:05:05.923Z",
							likes: 570,
							bids: {
								total: 120,
								list: [
									{
										image: "/bid/01.png",
									},
									{
										image: "/bid/02.png",
									},
									{
										image: "/bid/03.png",
									},
									{
										image: "/bid/04.png",
									},
								],
							},
						},
						{
							id: 3,
							title: "Dui accumsan leo vestibulum ornare",
							description:
								"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
							creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
							collection: {
								name: "Afterlife",
								avatar: "/avatar/Collection.png",
							},
							image: "/nft/3.png",
							price: 1.11,
							expiresAt: "2024-02-29T17:05:05.923Z",
							likes: 570,
							bids: {
								total: 101,
								list: [
									{
										image: "/bid/01.png",
									},
									{
										image: "/bid/02.png",
									},
									{
										image: "/bid/03.png",
									},
									{
										image: "/bid/04.png",
									},
								],
							},
						},
						{
							id: 4,
							title: "Senectus adipiscing nascetur accumsan etiam",
							description:
								"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
							creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
							collection: {
								name: "Afterlife",
								avatar: "/avatar/Collection.png",
							},
							image: "/nft/4.png",
							price: 1.63,
							expiresAt: "2024-02-29T11:05:05.923Z",
							likes: 98,
							bids: {
								total: 12,
								list: [
									{
										image: "/bid/01.png",
									},
									{
										image: "/bid/02.png",
									},
									{
										image: "/bid/03.png",
									},
									{
										image: "/bid/04.png",
									},
								],
							},
						},
						{
							id: 5,
							title: "Mattis at diam lorem nisl nam sed sociis",
							description:
								"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
							creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
							collection: {
								name: "Afterlife",
								avatar: "/avatar/Collection.png",
							},
							image: "/nft/1.png",
							price: 2.55,
							expiresAt: "2024-02-29T16:05:05.923Z",
							likes: 54,
							bids: {
								total: 19,
								list: [
									{
										image: "/bid/01.png",
									},
									{
										image: "/bid/02.png",
									},
									{
										image: "/bid/03.png",
									},
									{
										image: "/bid/04.png",
									},
								],
							},
						},
					],
				},
			};
		},

		setDoc: (state, action: PayloadAction<string>) => {
			return {
				value: {
					...state.value,
					doc: {
						title: "Dui accumsan leo vestibulum ornare",
						description:
							"Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
						creator: { name: "@brook_sim", avatar: "/avatar/Creator.png" },
						collection: { name: "Afterlife", avatar: "/avatar/Collection.png" },
						image: "/nft/1.png",
						price: 6.78,
						expiresAt: "2024-02-29T11:05:05.923Z",
						likes: 570,
						bids: {
							total: 101,
							list: [
								{
									image: "/bid/01.png",
								},
								{
									image: "/bid/02.png",
								},
								{
									image: "/bid/03.png",
								},
								{
									image: "/bid/04.png",
								},
							],
						},
					},
				},
			};
		},
	},
});

export const { setDoc, setList } = nft.actions;

export default nft.reducer;
