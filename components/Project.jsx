import { AiOutlineFolder, AiOutlineSelect } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Project = ({ title, description, tags, github_link, example_link }) => {
  let mediaLinks;
  if (example_link) {
    mediaLinks = (
      <div className="flex gap-4">
        <Link target="_black" href={example_link}>
          <AiOutlineSelect size={25} color="#88d4fc" />
        </Link>
        <Link target="_blank" href={github_link}>
          <FiGithub size={25} color="#88d4fc" />
        </Link>
      </div>
    );
  } else {
    mediaLinks = (
      <Link target="_blank" href={github_link}>
        <FiGithub size={25} color="#88d4fc" />
      </Link>
    );
  }

  return (
    <div className="bg-gray-800 p-6 w-[350px] h-auto shadow-lg border-2 border-gray-700 flex flex-col rounded-md">
      <div className="flex justify-between text-gray-500">
        <AiOutlineFolder size={25} />
        {mediaLinks}
      </div>
      <h1 className="text-white text-[32px] py-4">{title}</h1>
      <p className="text-gray-300 pb-4">{description}</p>

      <div className="flex flex-wrap w-auto gap-2">
        {tags.map((tag) => {
          return (
            <p
              key="tag"
              className="border-[1px] border-gray-700 px-3 rounded-sm text-gray-100 font-thin"
            >
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
