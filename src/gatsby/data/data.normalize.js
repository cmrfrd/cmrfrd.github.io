/* eslint-disable */

/**
 * In order to improve the authoring experience we'll set a fallback for hero images
 * when they're not provided. This will allow you to write posts without immediately
 * adding a hero image.
 *
 * @param {Object} heroSource
 */
function normalizeHero(post) {
  let hero = {
    full: {},
    regular: {},
    narrow: {},
    seo: {},
  };

  if (post.hero) {
    hero = {
      full: post.hero.full.fluid,
      regular: post.hero.regular.fluid,
      narrow: post.hero.narrow.fluid,
      seo: post.hero.seo.fixed,
    };
  } else {
    console.log('\u001B[33m', `Missing hero for "${post.title}"`);
  }

  return hero;
}

function normalizeAvatar(author) {
  let avatar = {
    small: {},
    medium: {},
    large: {},
  };

  if (author.avatar) {
    avatar = {
      small: author.avatar.small.fluid,
      medium: author.avatar.medium.fluid,
      large: author.avatar.large.fluid,
    };
  } else {
    console.log('\u001B[33m', `Missing avatar for "${author.name}"`);
  }

  return avatar;
}

module.exports.local = {
  posts: ({ node: post }) => {
    return {
      ...post,
      hero: normalizeHero(post),
    };
  },
  authors: ({ node: author }) => {
    return {
      ...author,
      avatar: normalizeAvatar(author),
    };
  },
};
