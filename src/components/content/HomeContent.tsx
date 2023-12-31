﻿import { Link } from "@builder.io/qwik-city";

import { Image } from "@unpic/qwik";

import { BsLifePreserver, BsSearch, BsWrench } from "@qwikest/icons/bootstrap";

const HomeContent = () => {
	return (
		<>
			<section class="wrapper" style={{ paddingTop: "3rem" }}>
				<div class="inner">
					<header class="special no-select">
						<h2>Waar kan ik u mee van dienst zijn?</h2>
						<p>
							Alle diensten die ik aanbied worden uitgebreider
							uitgelegd op de &quot;Diensten&quot; pagina.
						</p>
					</header>

					<div class="highlights">
						<section>
							<Link
								href="/diensten#com-mobile"
								style={{ textDecoration: "none" }}
							>
								<div class="content btn-highlights">
									<span class="flex w-full flex-col justify-center items-center gap-4">
										<BsWrench
											class="icon"
											style={{ color: "#ffa600" }}
										/>
										<h3>Computer op maat</h3>
									</span>
									<p class="text-gray-700">
										Computer speciaal op maat voor uw
										gebruik. Bij u thuis in elkaar gezet,
										geïnstalleerd.
									</p>
								</div>
							</Link>
						</section>
						<section>
							<Link
								style={{ textDecoration: "none" }}
								href="/diensten#com-ondersteuning"
							>
								<div class="content btn-highlights">
									<span class="flex w-full flex-col justify-center items-center gap-4">
										<BsLifePreserver
											class="icon"
											style={{ color: "#ffa600" }}
										/>
										<h3>Ondersteuning</h3>
									</span>
									<p class="text-gray-700">
										Heeft u problemen met bepaalde apparaten
										aan de praat krijgen? dan kan ik u hier
										ook mee helpen.
									</p>
								</div>
							</Link>
						</section>
						<section>
							<Link
								href="/diensten#com-advies"
								style={{ textDecoration: "none" }}
							>
								<div class="content btn-highlights">
									<span class="flex w-full flex-col justify-center items-center gap-4">
										<BsSearch
											class="icon"
											style={{ color: "#ffa600" }}
										/>
										<h3>Aankoop advies</h3>
									</span>
									<p class="text-gray-700">
										Advisering van de aankoop van
										elektronica zoals computers, laptops,
										smartphones etc.
									</p>
								</div>
							</Link>
						</section>
					</div>
				</div>
			</section>

			<section
				class="wrapper no-select"
				style={{ marginTop: "0px", paddingTop: "2rem" }}
			>
				<div class="inner">
					<div
						class="special"
						style={{ display: "flex", flexDirection: "column" }}
					>
						<h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
							Wie is Hardwarehulp
						</h2>
						<p
							style={{
								maxWidth: "800px",
								marginLeft: "auto",
								marginRight: "auto",
								textAlign: "center",
							}}
						>
							Goedendag en bedankt dat u een kijkje neemt op mijn
							website. Na ruim een jaar in de IT
							ondersteuningswereld gewerkt te hebben merkte ik dat
							plaatselijk in Kampen een tekort is aan een
							specifieke behoefte, betaalbare IT hulp aan huis
							zowel software als hardwarematig. Door dit tekort
							aan opties ben ik begonnen namens Hardwarehulp
							lokaal in Kampen, Overijssel.
						</p>
						<div
							class="author"
							style={{
								paddingBottom: "3rem",
							}}
						>
							<div class="image">
								<div
									style={{
										alignContent: "center",
										paddingTop: "5px",
									}}
								>
									<Image
										src="/img/Jesse.webp"
										alt="Jesse Koldewijn, Eigenaar Hardwarehulp"
										height={85}
										width={85}
									/>
								</div>
							</div>
							<p class="credit flex flex-col">
								<a
									href="https://www.linkedin.com/in/jesse-koldewijn-5914531a3/"
									target="_blank"
									rel="noreferrer"
									style={{
										textDecoration: "none",
										color: "#000",
										fontWeight: "bold",
									}}
								>
									Jesse Koldewijn
								</a>
								<a
									href="https://www.linkedin.com/company/hardwarehulp"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "black",
									}}
									rel="noreferrer"
								>
									Hardwarehulp
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="cta" class="wrapper no-select middle">
				<div class="inner">
					<h2>Transparantie staat voorop!</h2>
					<p style={{ color: "white" }}>
						Wat bedoel ik met transparantie? Transparant zijn zie ik
						zowel als eerlijk en open omgaan met feedback, maar ook
						om zo open mogelijk te zijn over de prijs/uurtarief die
						een afspraak zal gaan kosten. Om zo transparant mogelijk
						met feedback om te gaan wijs ik na elke eerste afspraak
						u op het feit dat u mij kunt beoordelen op Trustpilot.
						Hieronder kunt u mijn Trustpilot pagina en beoordeling
						vinden.
					</p>
					<div
						class="NotMobile"
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "2rem",
						}}
					>
						<a
							rel="canonical noreferrer"
							href="https://nl.trustpilot.com/review/hardwarehulp.nl"
							class="btnTrus"
							target="_blank"
						>
							Bekijk mijn pagina
						</a>
						<br class="spacer" />
						<a
							href="https://nl.trustpilot.com/evaluate/hardwarehulp.nl"
							class="btnTrus"
							target="_blank"
							rel="noreferrer"
						>
							Plaats een review
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeContent;
