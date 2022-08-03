import NavBar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import SEOFriendly from "./Component/SEO Friendly/SEOFriendly";
import Portfolio from "./Component/Portfolio/Portfolio";
import Projects from "./Component/Projects/Projects";
import CustomerComment from "./Component/Customer Comment/CustomerComment";
import Clients from "./Component/Clients/Clients";

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<SEOFriendly />
			<Portfolio />
			<Projects />
			<CustomerComment />
			<Clients />
		</>
	);
}

export default App;
