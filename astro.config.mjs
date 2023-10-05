import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mindplex docs',
			social: {
				linkedin: 'https://www.linkedin.com/company/79915299/',
				twitter: "https://twitter.com/Mindplex_AI",
				youtube: "https://www.youtube.com/channel/UCUwdBITXX-aDXgt2ZmBD-IA",

			},
			sidebar: [
				{
					label: 'Overview',
					link: '/overview'
				},
				{
					label: 'Mindplex Magazine',
					link: '/mindplex-magazine'

				},
				{
					label: 'Mindplex Media AI services',
					link: '/mindplex-media-ai-services'

				},
				{
					label: 'Mindplex Network Decentralizing Media',
					link: '/mindplex-network-decentralizing-media'
				},
				{
					label: 'Mindplex as a Global Reputation Calculator for Content and Content Creators',
					link: 'mindplex-as-a-global-reputation-calculator-for-content-and-content-creators',

				},
				{
					label: 'Monetization',
					link: '/monetization'
				},
				{
					label: "Compensating Creators",
					link: '/compensating-creators'
				},
				{
					label: 'Mindplex Token Logic',
					link: '/mindplex-token-logic'
				},
				{
					label: 'The Reputation System: Rewarding Interaction',
					link: '/the-reputation-system-rewarding-interaction'
				},
				{
					label: 'Guiding Site Moderation with MPXR',
					link: '/guiding-site-moderation-with-mpxr'
				},
				{
					label: 'Legal Issues around Content',
					link: '/legal-issues-around-content'
				},
				{
					label: 'Token Blockchains',
					link: '/token-blockchains'
				},
				{
					label: 'Roadmap',
					link: '/roadmap'
				},
				{
					label: 'Governance',
					link: '/governance'
				},
				{
					label: 'Governance Fund',
					link: '/governance-fund'
				},
				{
					label: 'Transition to DAO',
					link: '/transition-to-dao'
				}
			],
		}),
	],
});
// sidebar: [mindplex-media-ai-services
// 	{
// 		label: 'Overview',
// 		link: '/overview'
// 		 items: [
// 		 	 Each item here is one entry in the navigation menu.
// 		 	{ label: 'Example Guide', link: '/guides/example/' },
// 		 ],
// 	},
// 	{
// 		label: 'Reference',
// 		autogenerate: { directory: 'reference' },
// 	},
// ]