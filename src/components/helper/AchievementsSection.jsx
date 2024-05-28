import Description from "./Description";
import Heading from "./Heading";
import Hr from "./Hr";
export default function AchievementsSection({ achievements }) {
	return (
		<div>
			<Heading>Achievements</Heading>
			<Hr />
			<Description desc={achievements} />
		</div>
	);
}
