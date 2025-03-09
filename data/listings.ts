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
  description?: string
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
    readyToShip: true,
    description: "Original Nintendo Game Boy from 1989 in excellent condition. The screen is clear with no dead pixels, and all buttons work perfectly. Comes with the original battery cover and has been thoroughly cleaned and tested. This classic handheld console is perfect for collectors or retro gaming enthusiasts. Battery life is still impressive, and it comes with Tetris game cartridge. Minor scratches on the back but nothing that affects gameplay. This is a piece of gaming history that still provides hours of fun!"
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
    image: "/images/listing-images/Tiger-Electronics-2.jpg",
    description: "Vintage Tiger Electronics handheld game from the early 90s. This is the classic Batman version that was incredibly popular back in the day. The game is in working condition with some minor wear from normal use. The screen is clear, and the sound still works perfectly. Batteries not included. These Tiger handhelds are becoming increasingly collectible as nostalgic items from the 90s. Great addition to any vintage electronics collection!"
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
    image: "/images/listing-images/ex498gntqqq21.jpg",
    description: "Sega Game Gear in good working condition. This portable console was Sega's answer to the Game Boy and features a color screen. This unit has been refurbished with new capacitors, solving the common screen and sound issues these consoles develop over time. Comes with Sonic the Hedgehog game cartridge and the original AC adapter. The battery compartment is clean with no corrosion. Some light scratches on the case but the screen is in excellent condition. A great piece of gaming history!"
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
    image: "/images/listing-images/f9055mnaons81.jpg",
    description: "Complete in box Nintendo Game Boy Color in the iconic teal blue color. This set includes the original box, manuals, inserts, and the console itself in pristine condition. The screen has no scratches, and all buttons are responsive. Comes with Pokémon Blue game cartridge. The box shows minimal shelf wear but is in remarkable condition for its age. Battery compartment is clean with no corrosion. This is a collector's dream piece - rarely found in such complete condition."
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
    image: "/images/listing-images/oyz8q4vhe1u21.jpg",
    description: "Sony PSP 1000 (the original model) in black. Console is in good working condition with some minor scratches on the body and screen from normal use. Battery still holds a decent charge. Comes with 5 games: God of War: Chains of Olympus, Gran Turismo, Tekken: Dark Resurrection, Lumines, and Ridge Racer. Also includes charger, case, and 4GB memory stick. UMD drive works perfectly. This is the perfect starter kit for anyone looking to get into PSP collecting or retro gaming on the go."
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
    image: "/images/listing-images/s-l400.jpg",
    description: "Rare Nintendo Virtual Boy in working condition. This unique 3D gaming console from 1995 was a commercial failure but has become a highly sought-after collector's item. The unit has been tested and all functions work correctly. The red LED display is clear and bright with no dead pixels. Comes with the original controller, stand, and Mario's Tennis game. Some light wear on the body but overall in excellent condition for its age. A true conversation piece and must-have for serious Nintendo collectors."
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
    readyToShip: true,
    description: "Nintendo DS Lite in white, in perfect working condition. Both screens are pristine with no scratches or dead pixels. All buttons, hinges, and speakers work flawlessly. Battery holds a charge for 5-6 hours of gameplay. Comes with charger, stylus, and 3 games: New Super Mario Bros, Animal Crossing: Wild World, and Nintendogs. The console has been kept in a protective case its entire life and looks almost new. Ready to ship immediately in secure packaging."
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
    image: "/images/listing-images/60a071a6d8ce7cb882cadc93fbb2313e.jpg",
    description: "Rare Bandai WonderSwan handheld console, Japanese import in the original pearl white color. This unique handheld was designed by Gunpei Yokoi (creator of the Game Boy) and was only released in Japan. The console is in excellent condition with minimal signs of use. Screen is clear and all buttons are responsive. Comes with Final Fantasy I game cartridge and original box. The WonderSwan's unique vertical/horizontal gameplay orientation makes it a fascinating piece of gaming history. A must-have for serious collectors of Japanese gaming hardware."
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
    image: "/images/listing-images/techtalk-gameboy-header.jpg",
    description: "Limited edition Nintendo Game Boy Advance SP with the rare Tribal pattern. This special edition console features a unique silver case with tribal tattoo-inspired black graphics. The front-lit screen works perfectly and is bright and clear. Hinges are tight and all buttons are responsive. Battery holds a charge for approximately 8 hours. Comes with charger and Zelda: The Minish Cap game. Some light scratches on the outer case but overall in excellent condition. These limited edition designs are becoming increasingly collectible."
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
    readyToShip: true,
    description: "Vintage Atari Lynx handheld console from 1989 - the world's first handheld with a color LCD screen. This is the original model (Lynx I) with the horizontal orientation. The console has been professionally restored with new capacitors and a modern LCD screen upgrade that preserves the original look but provides better brightness and battery life. Comes with power adapter, carrying case, and three games: California Games, Chip's Challenge, and Gates of Zendocon. A true piece of gaming history in excellent working condition."
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