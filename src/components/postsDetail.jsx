import React from 'react';

function PostsDetail() {
  return (
    <div className="postsDetail-wrap">
      <section className="postsDetail">
        <header>
          <h1 className="postsDetail-title title">title</h1>
          <div className="postsDetail-info-wrap">
            <span className="postsDetail-user-name">user name</span>
            <span className="postsDetail-created-date">2021.01.01</span>
          </div>
          <div className="postsDetail-tag-wrap">
            <span>자바스크립트</span>
            <span>웹개발</span>
            <span>프론트엔드</span>
          </div>
        </header>
        <div className="postsDetail-content">
          본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용본문내용
        </div>
      </section>
      <section className="postsDetail-comment">
        <h2 className="postsDetail-comment-title title">댓글</h2>
        <form>
          <textarea
            name="comment"
            className="postsDetail-comment-input"
            type="text"
            placeholder="댓글을 입력하세요"
          />
          <button className="postsDetail-comment-button" type="submit">
            댓글 작성
          </button>
        </form>
      </section>
    </div>
  );
}

export default PostsDetail;
