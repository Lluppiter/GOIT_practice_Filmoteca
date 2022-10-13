export const mapper = array => {
  return array.map(
    ({ id, title, backdrop_path: image, vote_count: votes }) => ({
      id,
      title,
      image,
      votes,
    })
  );
};
