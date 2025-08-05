interface SiteConfig {
	author: '便宜机场推荐'
	title: '便宜机场推荐'
	description: '2025便宜好用稳定机场推荐（持续更新）'
	lang: 'zh-CN'
	ogLocale: 'zh_CN'
	shareMessage: '分享这篇文章'
	paginationSize: 10
}

export const siteConfig: SiteConfig = {
	author: '便宜机场推荐', // Site author
	title: '便宜机场推荐', // Site title.
	description: '2025便宜好用稳定机场推荐（持续更新）', // Description to display in the meta tags
	lang: 'zh-CN',
	ogLocale: 'zh_CN',
	shareMessage: '分享这篇文章', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}

// List of categories for blog posts
export const CATEGORIES = [
	'机场推荐',
	'便宜机场',
	'机场对比',
	'机场评价',
	'机场价格',
	'机场服务'
	
] as const

export const BLOGROLL = [
	{
		title: '一元机场',
		url: 'https://1yuan.uk/'
	},
	{
		title: '两元店机场',
		url: 'https://2yuan.uk/'
	},
	{
		title: '三毛机场',
		url: 'https://3mao.bid/'
	},
	{
		title: '优信云',
		url: 'https://youxinyun.bid/'
	},
		{
		title: '淘气兔',
		url: 'https://taoqitu.uk/'
	},
		{
		title: '宝可梦机场',
		url: 'https://baokemeng.bid/'
	},
		{
		title: '小火箭客户端',
		url: 'https://xiaohuojian.uk/'
	},
] as const
