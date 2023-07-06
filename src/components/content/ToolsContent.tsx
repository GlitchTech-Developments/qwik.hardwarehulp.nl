import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

const ToolsContent = () => {
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
												<Link href="/downloads/HHK-WinRepair.7z">
													Download
												</Link>
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
							<a
								href="https://freetools.seobility.net/en/seocheck/hardwarehulp.nl"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="https://freetools.seobility.net/widget/widget.png?url=hardwarehulp.nl"
									alt="Seobility Score of hardwarehulp.nl"
									height={80}
									width={80}
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
