import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Banner from "~/components/banner";
import ToolsContent from "~/components/content/ToolsContent";

export default component$(() => {
	return (
		<>
			<Banner
				title={"Tarieven"}
				desc={"Alle tarieven zijn vrijgesteld van btw"}
			/>
			<ToolsContent />
		</>
	);
});

export const head: DocumentHead = {
	title: "Tarieven | HardwareHulp - IT hulp aan huis in Kampen, Overijssel",
	meta: [
		{
			name: "description",
			content:
				"Tarieven | IT gerelateerde hulp aan huis in Kampen, Overijssel. Computers gebouwd op maat, technische ondersteuning en meer! Neem contact op!",
		},
	],
};
