export interface Post {
  /** Post content string. */
  content: string;
  meta: {
    /** Whether or not this post is available for public view. */
    published: boolean;
    /** The title of this post. */
    title: string;
    /** The release date of this post. */
    date: Date;
  };
}
