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
  },
  {
    id: "21",
    title: "Nintendo Game Boy Light - Japanese Import",
    price: "NOK 3,200",
    status: "Published",
    category: "Collectibles",
    location: "Oslo, Norway",
    seller: {
      name: "Petter Solberg",
      email: "petter.solberg@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/gameboy-console.jpg",
    readyToShip: true
  },
  {
    id: "26",
    title: "Nintendo Virtual Boy Games Bundle - 5 Games",
    price: "NOK 5,500",
    status: "Published",
    category: "Collectibles",
    location: "Helsinki, Finland",
    seller: {
      name: "Mikko Koivisto",
      email: "mikko.koivisto@yahoo.com",
      type: "Business"
    },
    image: "/images/listing-images/s-l400.jpg"
  },
  {
    id: "23",
    title: "Sega Nomad - Rare Portable Genesis Console",
    price: "NOK 2,900",
    status: "Unverified",
    category: "Gaming Equipment",
    location: "Bergen, Norway",
    seller: {
      name: "Trond Hansen",
      email: "trond.hansen@finn.no",
      type: "Private"
    },
    image: "/images/listing-images/ex498gntqqq21.jpg"
  },
  {
    id: "29",
    title: "Nintendo Game Boy Micro - Famicom Edition",
    price: "NOK 2,400",
    status: "Published",
    category: "Gaming Equipment",
    location: "Aarhus, Denmark",
    seller: {
      name: "Mads Rasmussen",
      email: "mads.rasmussen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/techtalk-gameboy-header.jpg",
    readyToShip: true
  },
  {
    id: "25",
    title: "Sony PSP 3000 - God of War Edition",
    price: "NOK 1,450",
    status: "Hidden",
    category: "Gaming Equipment",
    location: "Gothenburg, Sweden",
    seller: {
      name: "Erik Lindqvist",
      email: "erik.lindqvist@outlook.com",
      type: "Private"
    },
    image: "/images/listing-images/oyz8q4vhe1u21.jpg",
    readyToShip: true
  },
  {
    id: "30",
    title: "Atari Lynx Carrying Case with Games",
    price: "NOK 1,600",
    status: "Inactive",
    category: "Vintage Electronics",
    location: "Reykjavik, Iceland",
    seller: {
      name: "Björk Gunnarsdóttir",
      email: "bjork.gunnarsdottir@hotmail.com",
      type: "Business"
    },
    image: "/images/listing-images/kTCefaNg.png"
  },
  {
    id: "27",
    title: "Nintendo DSi XL - Burgundy - Like New",
    price: "NOK 950",
    status: "Published",
    category: "Gaming Equipment",
    location: "Trondheim, Norway",
    seller: {
      name: "Silje Larsen",
      email: "silje.larsen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/vgmmzjz9orsyt8imcwwd.jpg"
  },
  {
    id: "28",
    title: "Bandai WonderSwan Crystal - Final Fantasy Edition",
    price: "NOK 3,200",
    status: "Deleted",
    category: "Collectibles",
    location: "Malmö, Sweden",
    seller: {
      name: "Linus Ekström",
      email: "linus.ekstrom@telia.com",
      type: "Private"
    },
    image: "/images/listing-images/60a071a6d8ce7cb882cadc93fbb2313e.jpg"
  },
  {
    id: "24",
    title: "Nintendo Game Boy Color - Pokemon Edition",
    price: "NOK 2,100",
    status: "Published",
    category: "Gaming Equipment",
    location: "Copenhagen, Denmark",
    seller: {
      name: "Louise Christensen",
      email: "louise.christensen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/f9055mnaons81.jpg"
  },
  {
    id: "22",
    title: "Tiger Electronics Sonic 3 Handheld Game",
    price: "NOK 550",
    status: "Published",
    category: "Vintage Electronics",
    location: "Stockholm, Sweden",
    seller: {
      name: "Astrid Bergman",
      email: "astrid.bergman@hotmail.com",
      type: "Private"
    },
    image: "/images/listing-images/Tiger-Electronics-2.jpg"
  },
  {
    id: "11",
    title: "Nintendo Game Boy Pocket - Silver Edition",
    price: "NOK 950",
    status: "Published",
    category: "Gaming Equipment",
    location: "Stavanger, Norway",
    seller: {
      name: "Kristian Hansen",
      email: "kristian.hansen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/gameboy-console.jpg"
  },
  {
    id: "12",
    title: "Tiger Electronics Batman Game - Collector's Item",
    price: "NOK 650",
    status: "Published",
    category: "Vintage Electronics",
    location: "Gothenburg, Sweden",
    seller: {
      name: "Emma Johansson",
      email: "emma.johansson@hotmail.com",
      type: "Private"
    },
    image: "/images/listing-images/Tiger-Electronics-2.jpg",
    readyToShip: true
  },
  {
    id: "13",
    title: "Sega Game Gear with 5 Games Bundle",
    price: "NOK 1,200",
    status: "Inactive",
    category: "Gaming Equipment",
    location: "Aalborg, Denmark",
    seller: {
      name: "Mikkel Jensen",
      email: "mikkel.jensen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/ex498gntqqq21.jpg"
  },
  {
    id: "14",
    title: "Nintendo Game Boy Color - Yellow - Mint Condition",
    price: "NOK 1,500",
    status: "Published",
    category: "Gaming Equipment",
    location: "Tampere, Finland",
    seller: {
      name: "Matti Korhonen",
      email: "matti.korhonen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/f9055mnaons81.jpg",
    readyToShip: true
  },
  {
    id: "15",
    title: "Sony PSP 2000 - White - Limited Edition",
    price: "NOK 1,250",
    status: "Unverified",
    category: "Gaming Equipment",
    location: "Uppsala, Sweden",
    seller: {
      name: "Sofia Andersson",
      email: "sofia.andersson@outlook.com",
      type: "Private"
    },
    image: "/images/listing-images/oyz8q4vhe1u21.jpg"
  },
  {
    id: "16",
    title: "Nintendo Virtual Boy with Stand and Controller",
    price: "NOK 4,200",
    status: "Hidden",
    category: "Collectibles",
    location: "Turku, Finland",
    seller: {
      name: "Juha Mäkinen",
      email: "juha.makinen@yahoo.com",
      type: "Business"
    },
    image: "/images/listing-images/s-l400.jpg"
  },
  {
    id: "17",
    title: "Nintendo DS Lite - Black - With Charger and Games",
    price: "NOK 850",
    status: "Published",
    category: "Gaming Equipment",
    location: "Drammen, Norway",
    seller: {
      name: "Hanne Pedersen",
      email: "hanne.pedersen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/vgmmzjz9orsyt8imcwwd.jpg"
  },
  {
    id: "18",
    title: "Bandai WonderSwan Color - Crystal Blue",
    price: "NOK 2,800",
    status: "Deleted",
    category: "Collectibles",
    location: "Malmö, Sweden",
    seller: {
      name: "Gustav Nilsson",
      email: "gustav.nilsson@telia.com",
      type: "Private"
    },
    image: "/images/listing-images/60a071a6d8ce7cb882cadc93fbb2313e.jpg",
    readyToShip: true
  },
  {
    id: "19",
    title: "Nintendo Game Boy Advance SP - NES Edition",
    price: "NOK 1,700",
    status: "Published",
    category: "Gaming Equipment",
    location: "Odense, Denmark",
    seller: {
      name: "Thomas Nielsen",
      email: "thomas.nielsen@gmail.com",
      type: "Private"
    },
    image: "/images/listing-images/techtalk-gameboy-header.jpg"
  },
  {
    id: "20",
    title: "Atari Lynx II - Boxed with Games",
    price: "NOK 2,300",
    status: "Inactive",
    category: "Vintage Electronics",
    location: "Akureyri, Iceland",
    seller: {
      name: "Helga Jónsdóttir",
      email: "helga.jonsdottir@hotmail.com",
      type: "Business"
    },
    image: "/images/listing-images/kTCefaNg.png"
  }
] 