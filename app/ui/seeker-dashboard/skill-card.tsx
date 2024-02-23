import Image from "next/image";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="flex font-bold text-xl mb-2 items-center space-x-2">
          <Image src={icon} width="100" height="100" alt="Skill image." />
          <div className="flex flex-col text-left">
            <p className="text-gray-700">{title}</p>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
