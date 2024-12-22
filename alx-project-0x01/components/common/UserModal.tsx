import { UserModalProps, UserData } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    userId: 1,
    name: "",
    email: "",
    phone: "",
    company: "",
    catchPhrase: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add a new user
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={user.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your username."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Enter your phone."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={user.company}
                onChange={handleChange}
                placeholder="Enter your company name."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="catchPhrase">CatchPhrase</label>
              <input
                type="text"
                id="catchPhrase"
                name="catchPhrase"
                value={user.catchPhrase}
                onChange={handleChange}
                placeholder="Enter your company's catchPhrase."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;