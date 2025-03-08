export interface Listing {
  id: string
  title: string
  price: string
  status: "Published" | "Inactive" | "Hidden" | "Unverified" | "Deleted"
  category: string
  location: string
  seller: {
    name: string
    email: string
    type: "Private" | "Business"
  }
  image: string
  readyToShip?: boolean
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Nintendo Game Boy Classic - Excellent Condition",
    price: "NOK 1,200",
    status: "Published",
    category: "Gaming Equipment",
    location: "Oslo, Norway",
    seller: {
      name: "Anders Johansen",
      email: "anders.johansen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/gameboy-console.jpg",
    readyToShip: true
  },
  {
    id: "2",
    title: "Tiger Electronics Handheld Game - Vintage 90s",
    price: "NOK 450",
    status: "Published",
    category: "Vintage Electronics",
    location: "Stockholm, Sweden",
    seller: {
      name: "Elsa Lindberg",
      email: "elsa.lindberg@hotmail.com",
      type: "Private"
    },
    image: "/images/listing-images/Tiger-Electronics-2.jpg"
  },
  {
    id: "3",
    title: "Sega Game Gear - Retro Gaming Console",
    price: "NOK 850",
    status: "Inactive",
    category: "Gaming Equipment",
    location: "Bergen, Norway",
    seller: {
      name: "Magnus Olsen",
      email: "magnus.olsen@finn.no",
      type: "Private"
    },
    image: "/images/listing-images/ex498gntqqq21.jpg"
  },
  {
    id: "4",
    title: "Nintendo Game Boy Color - Teal Blue - Complete in Box",
    price: "NOK 1,800",
    status: "Published",
    category: "Gaming Equipment",
    location: "Copenhagen, Denmark",
    seller: {
      name: "Freya Nielsen",
      email: "freya.nielsen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/f9055mnaons81.jpg"
  },
  {
    id: "5",
    title: "Sony PSP 1000 - Black - With Games",
    price: "NOK 950",
    status: "Published",
    category: "Gaming Equipment",
    location: "Malmö, Sweden",
    seller: {
      name: "Björn Svensson",
      email: "bjorn.svensson@outlook.com",
      type: "Private"
    },
    image: "/images/listing-images/oyz8q4vhe1u21.jpg"
  },
  {
    id: "6",
    title: "Nintendo Virtual Boy - Rare Collectible",
    price: "NOK 3,500",
    status: "Unverified",
    category: "Collectibles",
    location: "Helsinki, Finland",
    seller: {
      name: "Annika Virtanen",
      email: "annika.virtanen@yahoo.com",
      type: "Business"
    },
    image: "/images/listing-images/s-l400.jpg"
  },
  {
    id: "7",
    title: "Nintendo DS Lite - White - Perfect Working Condition",
    price: "NOK 750",
    status: "Published",
    category: "Gaming Equipment",
    location: "Trondheim, Norway",
    seller: {
      name: "Lars Eriksen",
      email: "lars.eriksen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/vgmmzjz9orsyt8imcwwd.jpg",
    readyToShip: true
  },
  {
    id: "8",
    title: "Bandai WonderSwan - Japanese Import - Rare",
    price: "NOK 2,200",
    status: "Hidden",
    category: "Collectibles",
    location: "Gothenburg, Sweden",
    seller: {
      name: "Ingrid Bergström",
      email: "ingrid.bergstrom@telia.com",
      type: "Private"
    },
    image: "/images/listing-images/60a071a6d8ce7cb882cadc93fbb2313e.jpg"
  },
  {
    id: "9",
    title: "Nintendo Game Boy Advance SP - Tribal Edition",
    price: "NOK 1,400",
    status: "Published",
    category: "Gaming Equipment",
    location: "Aarhus, Denmark",
    seller: {
      name: "Søren Andersen",
      email: "soren.andersen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/techtalk-gameboy-header.jpg"
  },
  {
    id: "10",
    title: "Atari Lynx - Vintage Handheld Console",
    price: "NOK 1,900",
    status: "Deleted",
    category: "Vintage Electronics",
    location: "Reykjavik, Iceland",
    seller: {
      name: "Gunnar Sigurdsson",
      email: "gunnar.sigurdsson@hotmail.com",
      type: "Business"
    },
    image: "/images/listing-images/kTCefaNg.png",
    readyToShip: true
  }
] 