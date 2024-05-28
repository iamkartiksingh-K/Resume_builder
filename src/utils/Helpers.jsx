export function CreateLink(text, url, color, key) {
	this.text = text;
	this.link = url;
	this.color = color;
	this.key = key;
}

export function CreateSchool(
	collegeName,
	course,
	startDate,
	endDate,
	scoreType,
	score,
	key
) {
	this.collegeName = collegeName || "";
	this.course = course || "";
	this.startDate = startDate || "";
	this.endDate = endDate || "";
	this.scoreType = scoreType || "";
	this.score = score || "";
	this.key = key || "";
}

export function CreateJob(
	companyName,
	position,
	startDate,
	endDate,
	companyLocation,
	description,
	key
) {
	this.companyName = companyName || "";
	this.position = position || "";
	this.startDate = startDate || "";
	this.endDate = endDate || "";
	this.companyLocation = companyLocation || "";
	this.description = description || "";
	this.key = key || "";
}
export function CreateProject(
	projectName,
	techUsed,
	startDate,
	endDate,
	description,
	githubLink,
	liveLink,
	key
) {
	this.projectName = projectName || "";
	this.techUsed = techUsed || "";
	this.startDate = startDate || "";
	this.endDate = endDate || "";
	this.description = description || "";
	this.githubLink = githubLink || "";
	this.liveLink = liveLink || "";
	this.key = key || "";
}
