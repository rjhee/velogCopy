import React from 'react';

function PostsDetail() {
  return (
    <section className="postsDetail-wrap">
      <header>
        <h1 className="postsDetail-title">title</h1>
        <span className="postsDetail-user-name">user name</span>
        <span className="postsDetail-created-date">create At</span>
        <div className="postsDetail-tag-wrap">
          <span>자바스크립트</span>
          <span>웹개발</span>
          <span>프론트엔드</span>
        </div>
      </header>
      <div className="postsDetail-content">본문내용</div>
    </section>
  );
}

export default PostsDetail;
