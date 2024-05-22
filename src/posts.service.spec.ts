import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const postData = postsService.create(post)

    expect(postsService.find(postData.id)).toEqual(postData);
  });

  it('should find a post', () => {
    const postId = '1';
    const foundPost = postsService.find(postId);

    expect(foundPost).toHaveProperty('text', 'Some pre-existing post');
  });
});