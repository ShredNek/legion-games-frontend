import { ShoppingBag } from "lucide-react";
import ChannelImage from "./assets/img/hero-image.webp";
import Backpack from "./assets/img/test/backpack.jpg";
import DemoImg from "./assets/img/test/demo-img.jpeg";
import PinkLegionHoodie from "./assets/img/test/Pink_legion_hoodie.webp";
import TShirt from "./assets/img/test/tshirt.jpg";

const Header = () => {
	return (
		<header>
			<ul className="nav-links">
				<li>Home</li>
				<li>Catalog</li>
				<li>Contact</li>
			</ul>
			<h1>Legion Gaming</h1>
			<div className="shop-link">
				<a href="/">
					<ShoppingBag />
				</a>
			</div>
		</header>
	);
};

const Hero = ({ src, heroImgName }: { src: string; heroImgName: string }) => {
	const heroHeadingContent = "Welcome to the Legion!";
	const iterationCount = 5;
	const fullHeroHeading = Array(iterationCount)
		.fill(heroHeadingContent)
		.join(" ");

	return (
		<div className="hero-image-container">
			<div className="text-scroll-overlay">
				<h2>{fullHeroHeading}</h2>
			</div>
			<button type="button" className="shop-now-prompt">
				Shop Now
			</button>
			<img className="hero-image" src={src} alt={heroImgName} />
		</div>
	);
};

const Slider = () => (
	<>
		<h3>High Energy Content Creator</h3>
		<div className="images-container">
			<img
				src={PinkLegionHoodie}
				alt="1st showcased merchandise"
				className="img-before"
			/>
			<div className="dividers "></div>
			<img
				src={DemoImg}
				alt="2nd showcased merchandise"
				className="img-after"
			/>
		</div>
	</>
);

const ShopByCollection = () => (
	<>
		<h3>Shop by Collection</h3>
		<div className="legion-hoodies">
			<h4>LEGION Hoodies</h4>
			<img src={PinkLegionHoodie} alt="" />
		</div>
		<div className="legion-classic-tee">
			<h4>LEGION Classic Tee</h4>
			<img src={TShirt} alt="" />
		</div>
		<div className="legion-merch">
			<h4>LEGION Merch</h4>
			<img src={Backpack} alt="" />
		</div>
	</>
);

const Footer = () => (
	<footer>
		<span>© {new Date().getFullYear()} Legion Games</span>
		<span>
			Website built by <a href="https://github.com/ShredNek">Daniel Lee</a>
		</span>
	</footer>
);

export default function App() {
	return (
		<div>
			<Header />
			<Hero src={ChannelImage} heroImgName="Legion Games" />
			<Slider />
			<ShopByCollection />
			<Footer />
		</div>
	);
}
