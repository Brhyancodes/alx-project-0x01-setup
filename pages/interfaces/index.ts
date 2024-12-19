// Interface for geographical coordinates
export interface Geo {
  lat: string; // Latitude
  lng: string; // Longitude
}

// Interface for the user's address
export interface Address {
  street: string; // Street name
  suite: string; // Suite or apartment number
  city: string; // City name
  zipcode: string; // Zip code
  geo: Geo; // Geographical coordinates
}

// Interface for the user's company information
export interface Company {
  name: string; // Company name
  catchPhrase: string; // Company catchphrase
  bs: string; // Business description
}

// Main interface for user properties
export interface UserProps {
  id: number; // User ID
  name: string; // User's full name
  username: string; // User's username
  email: string; // User's email address
  address: Address; // User's address
  phone: string; // User's phone number
  website: string; // User's website
  company: Company; // User's company information
}

// Usage of the UserProps interface
const user: UserProps = {
  id: 1,
  name: "Michelle Cheptoo",
  username: "Mish",
  email: "mishcheptooe@gmail.com",
  address: {
    street: "Monrovia Street",
    suite: "Apt. 556",
    city: "Nairobi",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

//  `user` object in your application
// console.log(user);