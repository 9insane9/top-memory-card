function generateCards(count) {
  return Array.from({ length: count }, (_, i) => ({
    src: `https://picsum.photos/200/300?random=${Math.random()}`, // Use a unique random value for each card
    alt: `char${i + 1}`
  }));
}

const cards1 = generateCards(20)

const cards2 = [
  {
    src: "https://static.wikia.nocookie.net/radlands/images/d/db/People_-_Assassin.png",
    alt: "assassin",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/4/47/People_-_Cult_Leader.png",
    alt: "cult leader",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/8/8f/People_-_Doomsayer.png",
    alt: "doomsayer",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/0/02/People_-_Exterminator.png",
    alt: "exterminator",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/b/b7/People_-_Gunner.png",
    alt: "gunner",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/c/cf/People_-_Holdout.png",
    alt: "holdout",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/f/f9/People_-_Looter.png",
    alt: "looter",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/b/b6/People_-_Mimic.png",
    alt: "mimic",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/4/4d/People_-_Muse.png",
    alt: "muse",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/d/d9/People_-_Mutant.png",
    alt: "mutant",
  },

  {
    src: "https://static.wikia.nocookie.net/radlands/images/0/00/People_-_Pyromaniac.png",
    alt: "pyromaniac",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/3/39/People_-_Rabble_Rouser.png",
    alt: "rabble rouser",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/8/87/People_-_Repair_Bot.png",
    alt: "repair bot",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/c/c0/People_-_Rescue_Team.png",
    alt: "rescue team",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/1/1e/People_-_Scientist.png",
    alt: "scientist",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/c/cc/People_-_Scout.png",
    alt: "scout",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/3/3b/People_-_Sniper.png",
    alt: "sniper",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/0/09/People_-_Vanguard.png",
    alt: "vanguard",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/1/1c/People_-_Vigilante.png",
    alt: "vigilante",
  },
  {
    src: "https://static.wikia.nocookie.net/radlands/images/0/0a/People_-_Wounded_Soldier.png",
    alt: "wounded soldier",
  },
]

export default cards2