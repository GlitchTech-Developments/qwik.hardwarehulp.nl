﻿import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ImageLoader from "../../utils/ImageLoader";

const ToolsContent = () => {
	const router = useRouter();

	const [SeoCheckLoaded, setSeoCheckLoaded] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const clickRouter = (e: any, link: string) => {
		e.preventDefault();
		router.push(link);
	};

	return (
		<section id="main" class="wrapper">
			<div class="inner">
				<div class="content borders no-select">
					<div class="row">
						<div class="col-12 col-12-medium">
							<h4>Tools</h4>
							<div class="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>Naam</th>
											<th class="hidden-mob">
												Beschrijving
											</th>
											<th>Downloadlink</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>All-in-one Toolkit</td>
											<td class="hidden-mob">
												Algemene toolkit voor reparatie
												en testing van computers en
												laptops.
											</td>
											<td>
												<span
													onClick={(e) =>
														clickRouter(
															e,
															"/downloads/HHK-WinRepair.7z"
														)
													}
												>
													Download
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<hr />
					<div class="col-12 col-12-medium">
						<h4>Website Stats:</h4>
						<p
							style={{
								paddingBottom: "1rem",
								paddingTop: ".25rem",
								position: "relative",
							}}
						>
							{SeoCheckLoaded !== true && (
								<span
									style={{
										position: "absolute",
										marginTop: "auto",
										marginBottom: "auto",
									}}
								>
									Loading...
								</span>
							)}
							<a
								href="https://freetools.seobility.net/en/seocheck/hardwarehulp.nl"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="https://freetools.seobility.net/widget/widget.png?url=hardwarehulp.nl"
									alt="Seobility Score of hardwarehulp.nl"
									style={
										SeoCheckLoaded == false
											? { visibility: "hidden" }
											: { display: "block" }
									}
									loader={ImageLoader}
									height={80}
									width={80}
									priority={true}
									onLoadingComplete={() =>
										setSeoCheckLoaded(true)
									}
								/>
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ToolsContent;
