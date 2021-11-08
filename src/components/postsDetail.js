import React, { useState, useEffect } from 'react';
import Comments from './comments';
import Modal from './modal';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function PostsDetail() {
  let { id } = useParams();
  const [modalOn, setModalOn] = useState(false);
  // let history = useHistory();

  const [detailData, setDetailDate] = useState('');
  const [load, setLoad] = useState(false);

  const getData = async (target) => {
    try {
      setLoad(true);
      const data = await axios
        .get(`https://limitless-sierra-67996.herokuapp.com/v1/${target}/${id}`)
        .then(
          (response) => (
            setDetailDate(response.data), console.log(response.data)
          )
        );
    } catch {}

    setLoad(false);
  };

  useEffect(() => {
    getData('posts');
    // getData('comments');
  }, []);

  const onShareModal = () => {
    const current_url = window.location.href;
    navigator.clipboard.writeText(current_url).then(() => {
      setModalOn(true);
      setTimeout(() => {
        setModalOn(false);
      }, 1000);
    });
  };

  return (
    <div className="postsDetail-wrap">
      {modalOn === true ? <Modal></Modal> : null}
      <section className="postsDetail">
        <header>
          <button
            className="postsDetail-share-btn"
            onClick={() => {
              onShareModal();
            }}
          >
            <i class="fas fa-share-alt"></i>
          </button>
          <h1 className="postsDetail-title title">{detailData.title}</h1>
          <div className="postsDetail-info-wrap">
            <span className="postsDetail-user-name">user name</span>
            <span className="postsDetail-created-date">
              {detailData.updatedAt}
            </span>
          </div>
          <div className="postsDetail-tag-wrap">
            {detailData.tags &&
              detailData.tags.map((tag) => <span>{tag}</span>)}
          </div>
        </header>
        <div className="postsDetail-content">{detailData.body}</div>
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
      <ul className="comments-list">
        <Comments></Comments>
      </ul>
    </div>
  );
}

export default PostsDetail;
