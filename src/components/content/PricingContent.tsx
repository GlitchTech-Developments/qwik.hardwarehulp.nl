﻿const PricingContent = () => {
	return (
		<section id="main" class="wrapper">
			<div class="inner">
				<div class="content borders no-select">
					<div class="row">
						<div class="col-12 col-12-medium">
							<h4>Diensten</h4>
							<div class="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>Naam</th>
											<th class="hidden-mob">
												Beschrijving
											</th>
											<th>Prijs</th>
											<th>per</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Computer op maat</td>
											<td class="hidden-mob">
												Computer op maat gebouwd bij u
												thuis.
											</td>
											<td>80,-</td>
											<td>Computer</td>
										</tr>
										<tr>
											<td>Installatie apparatuur</td>
											<td class="hidden-mob">
												Installatie van apparatuur zoals
												computers, laptops, speakers,
												printer etc.
											</td>
											<td>40,-</td>
											<td>afspraak</td>
										</tr>
										<tr>
											<td>Advisering aankoop</td>
											<td class="hidden-mob">
												Advisering van de aankoop van
												elektronica zoals computers,
												laptops, smartphones etc.
											</td>
											<td>20,-</td>
											<td>afspraak</td>
										</tr>
										<tr>
											<td>Technische ondersteuning</td>
											<td class="hidden-mob">
												Technische ondersteuning bij
												hardware en softwarematige zaken
												zoals opschonen van uw
												computer/laptop en nog veel
												meer.
											</td>
											<td>30,-</td>
											<td>uur **</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td
												colSpan={4}
												style={{ paddingBottom: "0px" }}
											>
												*Alle prijzen zijn vrijgesteld
												van BTW
											</td>
										</tr>
										<tr>
											<td
												colSpan={4}
												style={{ paddingTop: "0px" }}
											>
												**Minimale afname van 1 uur
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<h4>Producten</h4>
							<div class="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>Naam</th>
											<th class="hidden-mob">
												Beschrijving
											</th>
											<th>Prijs</th>
											<th>Per</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Windows 10 Pro licentie</td>
											<td class="hidden-mob">
												Licentie voor activering van
												Windows 10 Pro editie.
											</td>
											<td>25,-</td>
											<td>Stuk</td>
										</tr>
										<tr>
											<td>Windows 10 Home licentie</td>
											<td class="hidden-mob">
												Licentie voor activering van
												Windows 10 Home editie.
											</td>
											<td>20,-</td>
											<td>Stuk</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td
												colSpan={4}
												style={{ paddingBottom: "0px" }}
											>
												*Alle prijzen zijn vrijgesteld
												van BTW
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div class="Tarieven-uitleg">
								<blockquote
									style={{
										paddingLeft: "10px",
										backgroundColor: "whitesmoke",
									}}
								>
									Windows licenties zijn alleen aan te
									schaffen bij een computer op maat of
									Installatie van apparatuur.
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingContent;
