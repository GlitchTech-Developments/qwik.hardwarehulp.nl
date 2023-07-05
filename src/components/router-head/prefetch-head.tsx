const PrefetchHead = () => {
	return (
		<>
			<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
			<link
				rel="preload"
				href="https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2?display=swap"
				as="font"
				type="font/woff2"
			/>
		</>
	);
};
export default PrefetchHead;