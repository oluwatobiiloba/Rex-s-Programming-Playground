
import wolf from "../../assets/images/Wolf.jpg";
import {ContentNavButton} from "./ContentNavButton";
import {ContentBody} from "./ContentBody";

export function HomePage() {
	return (
		<div>
			<div className="img">
				<img src= {wolf} alt="wolf.jpg" className="image" />
			</div>
			<h1 className="name">
				OLUWATOBILOBA AREMU.
			</h1>
			<ContentNavButton></ContentNavButton>
			<ContentBody></ContentBody>
		</div>
	)
}

