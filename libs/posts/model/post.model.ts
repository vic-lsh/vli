export interface Post {
  /** Post content string. */
  content: string;
  /** The ID of the post; also used in the route to this post. */
  slug: string;
  meta: {
    /** Whether or not this post is available for public view. */
    published: boolean;
    /** The title of this post. */
    title: string;
    /** The release date of this post. */
    dateStr: string;
  };
}
