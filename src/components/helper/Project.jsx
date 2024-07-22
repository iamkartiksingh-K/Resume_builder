import Description from "./Description";
export default function Project({
  projectName,
  techUsed,
  startDate,
  endDate,
  githubLink,
  liveLink,
  description,
}) {
  return (
    <div className="mb-2">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">
            {projectName}
            <span className="font-normal"> |</span>
            <span className="italic font-normal"> {techUsed}</span>
          </p>
        </div>
        <div className="text-right">
          <p>{startDate && `${startDate} - ${endDate}`}</p>
        </div>
      </div>

      <Description desc={description} />
      <div className="mt-1">
        {githubLink && (
          <a className="text-blue-600 mr-2 ml-4" href={`${githubLink}`}>
            Github
          </a>
        )}
        {liveLink && (
          <a className="text-blue-600 mr-2" href={`${liveLink}`}>
            Live
          </a>
        )}
      </div>
    </div>
  );
}
