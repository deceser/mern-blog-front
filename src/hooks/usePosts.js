import React from "react";

// sorted posts string text, title, views

export const useSortedPosts = (posts, sort) => {
  const selectSortPost = React.useMemo(() => {
    if (sort) {
      console.log(sort);
      return [...posts].sort((a, b) => (a[sort] < b[sort] ? 1 : -1));
    }
    return posts;
  }, [posts, sort]);

  return selectSortPost;
};

// -----------------------------------------------------------------

// sorted and search posts title

export const usePosts = (posts, sort, search) => {
  const selectSortPost = useSortedPosts(posts, sort);
  const sortAndSearch = React.useMemo(() => {
    return selectSortPost.filter((post) => post.title.toLowerCase().includes(search));
  }, [search, selectSortPost]);

  return sortAndSearch;
};
