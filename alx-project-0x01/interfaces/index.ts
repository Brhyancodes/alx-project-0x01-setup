// Define the structure for coordinates
export interface Coordinate {
    lat: string;
    lng: string;
}

// Define the structure for an address
export interface Address {
    street: string; // This property is included
    suite: string;
    city: string;
    zipcode: string;
    geo: Coordinate;
}

// Define the structure for a company
export interface Company {
    name: string;
    catchPhrase: string; // This property is included
    bs: string;
}

// Define the structure for a user
export interface UserProps {
    id: number;
    name: string;
    username: string; // This property is included
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Define the structure for a post
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Define the structure for post data
export interface PostData {
    userId: number;
    id?: number; // Optional property
    title: string;
    body: string;
}

// Define the props for the post modal
export interface PostModalProps {
    onClose: () => void; // Function to close the modal
    onSubmit: (post: PostData) => void; // Function to submit the post data
}

// Define the structure for user data
export interface UserData {
    userId: number;
    id?: number;
    name: string;
    username: string; // Ensure this is included if needed
    email: string;
    phone: string;
    address: Address; // Include address if needed
    company: string; // If you want to keep it as a string, otherwise use Company interface
    catchPhrase: string; // Ensure this is included if needed
}

// Define the props for the user modal
export interface UserModalProps {
    onClose: () => void; // Function to close the modal
    onSubmit: (user: UserProps) => void; // This should be UserProps
}