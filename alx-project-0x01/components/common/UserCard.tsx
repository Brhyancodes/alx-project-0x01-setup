import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, company, phone }) => {
    return (
        <article className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <h3 className="text-lg font-semibold text-gray-800">{email}</h3>

            <div className="mt-4">
                <p className="text-base font-normal font-sans text-black"><span className="font-bold">Phone:</span> {phone}</p>
                <p className="text-base font-normal font-sans text-black"><span className="font-bold">Company:</span> {company.name}</p>
                <p className="text-base font-normal font-sans text-black"><span className="font-bold">Motto:</span>{company.catchPhrase}</p>
            </div>
        </article>
    )
}

export default UserCard