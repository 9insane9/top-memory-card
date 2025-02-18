function generateCards(count) {
  return Array.from({ length: count }, (_, i) => ({
    src: "linkHere",
    alt: `char${i + 1}`
  }));
}

const cards = generateCards(20)

export default cards