import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/banner";
// import HomeContent from "~/components/content/HomeContent";

export default component$(() => {
	return (
		<>
			<Banner
				title={"HardwareHulp"}
				desc={"IT hulp aan huis in Kampen, Overijssel"}
			/>
			{/* <HomeContent /> */}
		</>
	);
});

export const head: DocumentHead = {
	title: "Home | HardwareHulp - IT hulp aan huis in Kampen, Overijssel",
	meta: [
		{
			name: "description",
			content:
				"IT gerelateerde hulp aan huis in Kampen, Overijssel. Computers gebouwd op maat, technische ondersteuning en meer! Neem contact op!",
		},
	],
};
