import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="text-gray-600 space-y-1">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Website:{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          <span className="font-semibold">Company:</span> {company.name}
        </p>
        <p className="italic">“{company.catchPhrase}”</p>
        <p>
          <span className="font-semibold">Address:</span>{" "}
          {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
