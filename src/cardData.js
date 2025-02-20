function generateCards(count) {
  return Array.from({ length: count }, (_, i) => ({
    src: `https://picsum.photos/200/300?random=${Math.random()}`, // Use a unique random value for each card
    alt: `char${i + 1}`
  }));
}

const cards = generateCards(20);

export default cards;
