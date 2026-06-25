export const getMovieType = (type: string) => {
  switch (type) {
    case "now_playing":
      return "New on Netflix";
    case "popular":
      return "Most viewed";
    case "top_rated":
      return "Top rated";
    case "upcoming":
      return "Recently added";
  }
};
