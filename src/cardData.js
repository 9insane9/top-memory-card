function generateCards(count) {
  const link = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgImSz5MvBdFmpGXJQcLCrn0jtZq2WHZJL_EBZdL-4rKv8oBLhulj4xe-qLFPWkS3aIO6wYIz_2wBpOCrVvjaH-A"

  return Array.from({ length: count }, (_, i) => ({
    src: "link",
    alt: `char${i + 1}`
  }));
}

const cards = generateCards(20)

export default cards