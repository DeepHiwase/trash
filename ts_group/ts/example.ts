// ---------------------- TypeScript --------------------------------
import { type Animal } from "./shared-types.types";

const run = (message: string) => {
  console.log(message);
};

run("Hello! JS after Transpiling from TS 💀");

// function logAlbumInfo(title: string, trackCount: number, isReleased: boolean) {}

// logAlbumInfo("Black Gold", false, 15);

// let albumTitle: string = "Black gold";
// let isReleased: boolean = false;
// let trackCount: number = 13;

let albumTitle = "Black gold";
let isReleased = false;
let trackCount = 13;

albumTitle = "1989";
// isReleased = "yes";
albumTitle.toUpperCase();

let example1: string = "Hello world!";
let example2: number = 42;
let example3: boolean = true;
let example5: null = null;
let example6: undefined = undefined;
let example7: symbol = Symbol();
// let example4: bigint = 123n;
// -----
let example9: object = {};
let example10: object = [];
let example11: object = new Map();
let example12: object = new Set();
let example14: true = true;
let example15: false = false;
let example8: void;
let anyVariable: any = new Set();
anyVariable();
anyVariable.deep.property.access;

const talkToAnimal = (animal: {
  name: string;
  type: string;
  age?: number;
}) => {};

talkToAnimal({ name: "Dog", type: "Pet", age: 12 });
talkToAnimal({ name: "Dog", type: "Pet" });

let pet: Animal = {
  name: "Karma",
  type: "cat",
};

const getAnimalDescription = (animal: Animal) => {};

let desc = getAnimalDescription(pet);

type Id = string | number;

// -------
let albums: string[] = [
  "Rubber Soul",
  "Revolver",
  "Sgt. Pepper's Lonely Hearts Club Band",
];

let dates: number[] = [1965, 1966, 1967];

// let albums: Array<string> = [
//   "Rubber Soul",
//   "Revolver",
//   "Sgt. Pepper's Lonely Hearts Club Band",
// ];

type Album = {
  artist: string;
  title: string;
  year: number;
};

let selectedDiscography: Album[] = [
  { artist: "The Beatles", title: "Rubber Soul", year: 1965 },
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1966,
  },
];
// selectedDiscography.push({ name: "Karma", type: "Cat" });
selectedDiscography.push({ artist: "Jeom", title: "Ice Cream", year: 2024 });

let album: [string, number] = ["Rubber Soul", 1965];

type MyTuple = [album: Album, playCount: number];

let albumWithPlayCount: [Album, number] = [
  {
    artist: "The Beatles",
    title: "Revolver",
    year: 1965,
  },
  10000,
];

// let formats = new Set();
// let formats = new Set(["CD", "DVD"]);
let formats = new Set<string>();
formats.add("Digital");
// formats.add(9)

// const audioElement = document.getElementById<HTMLAudioElement>("player") // ❌ as it don't have <> in its typing so it doesn't accept typing
const audioElement = document.querySelector<HTMLAudioElement>("#player"); // check for <> in typing

function logAlbumInfo(
  title: string,
  trackCount: number,
  isReleased: boolean,
  releaseDate?: string,
  format = "CD"
): string {
  return "";
}

logAlbumInfo("Midnights", 13, true, "2022-10-21");
// logAlbumInfo("Midnights", 13, true, undefined); //❌ never pass undefined by your selves
logAlbumInfo("American Beauty", 10, true);

function getAlbumFormats(album: Album, ...formats: string[]) {
  return `${album.title} is available in the following formats: ${formats.join(
    ", "
  )}`;
}

let albumFormats = ["LP", "Cassette"];

getAlbumFormats(
  { artist: "Radiohead", title: "OK Computer", year: 1997 },
  "CD",
  "DVD",
  "Digital",
  ...albumFormats
);

// ----
type Mapper = (item: string) => number;
const mapOverItems = (items: string[], map: Mapper) => {
  return items.map(map);
};

const arrayOfNumbers = mapOverItems(["1", "2", "3"], (item) => {
  return parseInt(item) * 100;
});

type WithOptional = (index?: number) => number;
type WithRest = (...rest: string[]) => number;
type WithMultiple = (first: string, second: string) => string;

const logResult = console.log("Hello!");

////-------
// const getUser = async (id: string): Promise<User> => {
//   const user = await db.user.het(id);
//   return user;
// };