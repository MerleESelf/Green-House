"use strict";

const {
  db,
  models: { User, Plant, Room, Window },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // users
  const Merle = await User.create({
    username: "Merle",
    email: "merleself@gmail.com",
    password: "123",
  });

  //plants
  const Fiddle = await Plant.create({
    genus: "ficus",
    species: "lyrata",
    commonName: "fiddle leaf fig",
    isVariegated: false,
    potSize: 10,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1656.JPG",
  });

  const Cebu = await Plant.create({
    genus: "epipremnum",
    species: "pinnatum",
    commonName: "cebu blue pothos",
    isVariegated: false,
    potSize: 8,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG",
  });

  const ZZ = await Plant.create({
    genus: "zamioculcas",
    species: "zamiifolia",
    commonName: "zz raven",
    isVariegated: false,
    potSize: 8,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1662.JPG",
  });

  const dragon = await Plant.create({
    genus: "euphorbia",
    species: "lactea",
    commonName: "dragon bone cactus",
    isVariegated: false,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1669.JPG",
  });

  const Avo = await Plant.create({
    genus: "persea",
    species: "americana",
    commonName: "avocado plant",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1670.JPG",
  });

  const Sumatra = await Plant.create({
    genus: "hoya",
    species: "caudata (sumatra)",
    commonName: "wax plant",
    isVariegated: false,
    potSize: 2,
    pottingMedium: "coconut husk",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1672.JPG",
  });

  const Calli = await Plant.create({
    genus: "hoya",
    species: "callistophylla",
    commonName: "wax plant",
    isVariegated: false,
    potSize: 2,
    pottingMedium: "coconut husk",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1675.JPG",
  });

  const tiger = await Plant.create({
    genus: "calathea",
    species: "tigrina",
    commonName: "prayer plant",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1676.JPG",
  });

  const Money = await Plant.create({
    genus: "pachira",
    species: "aquatica",
    commonName: "money tree",
    isVariegated: false,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1679.JPG",
  });

  const TradN = await Plant.create({
    genus: "tradescantia",
    species: "albiflora (nanouk)",
    commonName: "spiderwort",
    isVariegated: true,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1680.JPG",
  });

  const Stromanthe = await Plant.create({
    genus: "stromanthe",
    species: "sanguinea (triostar)",
    commonName: "prayer plant",
    isVariegated: true,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1688.JPG",
  });

  const Rip = await Plant.create({
    genus: "rhipsalis",
    species: "pilocarpa",
    commonName: "junlge catus",
    origin: "Brazil",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1689.JPG",
  });

  const Stolen = await Plant.create({
    genus: "rhipsalis",
    species: "baccifera",
    commonName: "mistletoe catus",
    origin: "South America",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG",
  });

  const retusa = await Plant.create({
    genus: "hoya",
    species: "retusa",
    commonName: "wax plant",
    origin: "India",
    isVariegated: false,
    potSize: 1,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1754.JPG",
  });

  const bang = await Plant.create({
    genus: "hoya",
    species: "ban ngong ngoy",
    commonName: "wax plant",
    origin: "Thailand",
    isVariegated: false,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1694.JPG",
  });

  const macro = await Plant.create({
    genus: "hoya",
    species: "macrophylla",
    commonName: "wax plant",
    origin: "Boreno",
    isVariegated: true,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1696.JPG",
  });

  const whale = await Plant.create({
    genus: "dracaena",
    species: "masoniana",
    commonName: "whale fin",
    origin: "Democratic Republic of the Congo",
    isVariegated: true,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1697_2.JPG",
  });

  const cylindrical = await Plant.create({
    genus: "dracaena",
    species: "angolensis",
    commonName: "cylindrical snake plant",
    origin: "Angolia",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1700.JPG",
  });

  const Mikado = await Plant.create({
    genus: "dracaena",
    species: "bacularis",
    commonName: "mikado snake plant",
    origin: "Africa",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1702.JPG",
  });

  const hearts = await Plant.create({
    genus: "ceropegia",
    species: "woodii",
    commonName: "string of hearts",
    origin: "South Africa",
    isVariegated: true,
    potSize: 1,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1706.JPG",
  });

  const princess = await Plant.create({
    genus: "hoya",
    species: "carnosa (krimson princess)",
    commonName: "wax plant",
    origin: "Thailand",
    isVariegated: true,
    potSize: 6,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1707.JPG",
  });

  const shep = await Plant.create({
    genus: "hoya",
    species: "shepherdii",
    commonName: "wax plant",
    origin: "Himalayas",
    isVariegated: false,
    potSize: 4,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1712.JPG",
  });

  const rope = await Plant.create({
    genus: "hoya",
    species: "carnosa (compacta)",
    commonName: "wax plant",
    origin: "Australia",
    isVariegated: false,
    potSize: 1,
    pottingMedium: "potting mix",
    image: "https://hosting.photobucket.com/images/i/MerleSelf/IMG_1716.JPG",
  });

  // rooms
  const bedroom = await Room.create({
    humidity: 40,
    temp: 65,
  });

  const bedroom2 = await Room.create({
    humidity: 40,
    temp: 65,
  });

  const bathroom = await Room.create({
    humidity: 65,
    temp: 70,
  });

  const kitchen = await Room.create({
    humidity: 30,
    temp: 65,
  });

  const livingRoom = await Room.create({
    humidity: 30,
    temp: 65,
  });

  // windows
  const Mbroom = await Window.create({
    exposure: "south-east",
  });

  // const kbroom = await Window.create({
  //   exsposure: 'south-east',
  // });

  // const kslide = await Window.create({
  //   exsposure: 'south-east',
  // });

  const mslide = await Window.create({
    exposure: "north-east",
  });

  const livinroom = await Window.create({
    exposure: "north-east",
  });

  // set associations: room
  // room - plants
  await bedroom.setPlants([
    Fiddle,
    Cebu,
    rope,
    shep,
    princess,
    hearts,
    Mikado,
    cylindrical,
    whale,
    macro,
    bang,
    retusa,
    Stolen,
    Rip,
    Stromanthe,
    tiger,
    Calli,
    Sumatra,
    Avo,
    dragon,
    ZZ,
  ]);
  await livingRoom.setPlants([TradN, Money]);
  //room - windows
  await bedroom.setWindows([Mbroom, mslide]);
  await livingRoom.setWindows([livinroom]);

  // set associations: users
  //user - plants
  await Merle.setPlants([
    Fiddle,
    Cebu,
    rope,
    shep,
    princess,
    hearts,
    Mikado,
    cylindrical,
    whale,
    macro,
    bang,
    retusa,
    Stolen,
    Rip,
    Stromanthe,
    tiger,
    Calli,
    Sumatra,
    Avo,
    dragon,
    ZZ,
    TradN,
    Money,
  ]);
  // user - rooms;
  await Merle.setRooms([bedroom, bedroom2, bathroom, kitchen, livingRoom]);

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
