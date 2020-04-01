import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './components/post';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const SFE_IMAGE = "https://fedorko.pro/files/sfe-avatar.png";
const SFE_MESSAGE_IMAGE = "https://fedorko.pro/files/javascript-what-month.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Post author={{
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      quantityСomment={"482"}
      quantityRepost={"146"}
      quantityFavorite={"887"}
    />

    <Post author={{
        name: "Stas Fedorko",
        photo: SFE_IMAGE,
        nickname: "@st_wh"
      }}
      content="Hi guys! Do you know what month it is today? 😁"
      image={SFE_MESSAGE_IMAGE}
      date={"27 февр."}
      quantityСomment={"123"}
      quantityRepost={"22"}
      quantityFavorite={"38"}
    />

    <Post author={{
        name: "Ivan Ivanov",
        nickname: "@ivanushka"
      }}
      content="Tomorrow I'll go change my name ..."
      date={"28 февр."}
      quantityСomment={"24"}
      quantityRepost={"18"}
      quantityFavorite={"5"}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
