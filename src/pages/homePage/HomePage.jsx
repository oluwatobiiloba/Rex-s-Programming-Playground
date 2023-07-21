import './homepage.css'
import wolf from "../../assets/images/Wolf.jpg";
import {ContentBody} from "./ContentBody";

export function HomePage() {
	return (
		<div className=" flex flex-col justify-center items-center">
			<div className=" flex-col justify-center items-center">
				<img src= {wolf} alt="wolf.jpg" className="image" />
			</div>
			<h1 className="name text-[30px]  sm:text-[50px]  md:text-[90px] lg:text-[110px] xl:text-[160px] dark:text-amber-50 py-4 ">
				OLUWATOBILOBA AREMU.
			</h1>
			<ContentBody></ContentBody>
		</div>
	)
}

