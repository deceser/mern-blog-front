import React from "react";

// sorted posts string text, title, views

export const useSortedPosts = (posts, sort) => {
  const selectSortPost = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => b[sort] - a[sort] || a[sort].localeCompare(b[sort]));

      //  b[sort] - a[sort] sorted number (views)
      //  a[sort].localeCompare(b[sort]) sorted string (title, text)
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
