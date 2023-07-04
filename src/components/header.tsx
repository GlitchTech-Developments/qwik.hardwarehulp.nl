import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

import Logo from "../img/logo.webp";

const Header = () => {
	return (
		<header id="header">
			<a class="logo no-select" href="/">
				<Image
					id="header-icon"
					src={Logo}
					alt="Logo Hardwarehulp"
					height={70}
					width={70}
				/>
			</a>
			<nav class="no-select">
				<Link class="nav-link" rel="canonical" href="/">
					Home
				</Link>
				<Link class="nav-link" rel="canonical" href="/diensten">
					Diensten
				</Link>
				<Link class="nav-link" rel="canonical" href="/tarieven">
					Tarieven
				</Link>
			</nav>
		</header>
	);
};

export default Header;
