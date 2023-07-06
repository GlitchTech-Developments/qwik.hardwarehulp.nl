import { Link } from "@builder.io/qwik-city";
import {
	BsEnvelope,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsWhatsapp,
} from "@qwikest/icons/bootstrap";

const Footer = () => {
	return (
		<>
			<section class="wrapper no-select">
				<div class="inner">
					<div class="special-footer">
						<h2>Heeft u nog vragen?</h2>
						<p>
							Dat snap ik wel. Neem alstublieft contact op als u
							vragen heeft.
						</p>
						<div class="w-full flex gap-4 items-center justify-center align-middle">
							Whatsapp{" "}
							<a href="https://wa.me/31642981933">
								<BsWhatsapp
									class="icon"
									style={{
										color: "#ffa600",
										fontSize: "35px",
									}}
								/>
							</a>
							E-mail{" "}
							<a href="mailto://jesse@hardwarehulp.nl">
								<BsEnvelope
									class="icon"
									style={{
										color: "#ffa600",
										fontSize: "35px",
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
			<footer id="footer">
				<div class="inner">
					<div class="content">
						<section>
							<div class="plain">
								<h3 class="no-select">Hardwarehulp</h3>
								<p class="no-select">
									IT hulp aan huis
									<br />
									Ik help u graag met de volgende apparaten:
									<br />
									<i>
										computers, laptops, smartphones en
										tablets.
									</i>
									<br />
									Valt het apparaat waar u hulp voor zoekt
									hier niet onder?
									<br />
									Neem dan contact op.
								</p>
								<p
									style={{
										fontFamily:
											"Arial, Helvetica, sans-serif",
										fontSize: "13px",
									}}
								>
									Kvk: <span>81511515</span>
									<br />
									IBAN: NL15 ABNA 0884 2883 74
									<br />
									Tel:{" "}
									<a href="https://wa.me/31642981933">
										+31 6 42 98 1933
									</a>
								</p>
							</div>
						</section>
						<section>
							<h4 class="no-select">Pagina&apos;s</h4>
							<div class="alt no-select flex flex-col gap-3">
								<a href="/">Hoofdpagina</a>
								<a href="/diensten">Diensten</a>
								<a href="/tarieven">Tarieven</a>
								<a rel="canonical" href="https://hhhost.nl">
									Hosting
								</a>
							</div>
						</section>
						<section class="no-select mt-6">
							<h4>Volg mij!</h4>
							<ul class="plain no-select">
								<li>
									<a
										href="https://www.instagram.com/hardwarehulp/"
										class="flex items-center"
										onMouseEnter$={() => {
											const Icon =
												document.getElementById(
													"ig-icon"
												);
											Icon?.classList.add("fill-brand");
										}}
										onMouseLeave$={() => {
											const Icon =
												document.getElementById(
													"ig-icon"
												);
											Icon?.classList.remove(
												"fill-brand"
											);
										}}
									>
										<BsInstagram
											id="ig-icon"
											class="icon mb-1"
										/>
										<span>Instagram</span>
									</a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/hardwarehulp"
										class="flex items-center"
										onMouseEnter$={() => {
											const Icon =
												document.getElementById(
													"fb-icon"
												);
											Icon?.classList.add("fill-brand");
										}}
										onMouseLeave$={() => {
											const Icon =
												document.getElementById(
													"fb-icon"
												);
											Icon?.classList.remove(
												"fill-brand"
											);
										}}
									>
										<BsFacebook
											id="fb-icon"
											class="icon mb-1"
										/>
										Facebook
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/company/hardwarehulp"
										class="flex items-center"
										onMouseEnter$={() => {
											const Icon =
												document.getElementById(
													"li-icon"
												);
											Icon?.classList.add("fill-brand");
										}}
										onMouseLeave$={() => {
											const Icon =
												document.getElementById(
													"li-icon"
												);
											Icon?.classList.remove(
												"fill-brand"
											);
										}}
									>
										<BsLinkedin
											id="li-icon"
											class="icon mb-2"
										/>
										Linkedin
									</a>
								</li>
							</ul>
						</section>
					</div>
					<div class="copyright no-select">
						<span style={{ fontSize: "13px" }}>
							<Link href="/">Hardwarehulp</Link>
							{" 2021-" + new Date().getFullYear()} | IT hulp aan
							huis
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
