import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [discussions, setDiscussions] = useState([]);

  const getDiscussions = () =>{
    fetch('http://localhost:3001/discussions')
    .then((res)=>res.json())
    .then((data)=>{
      setDiscussions(data)
      console.log(data)
    })
    .catch((e) => {
      console.log(`에러`);
    });
  }

  useEffect(()=>{
    getDiscussions();
  },[])

  return (
    <div>
      <Header></Header>
      <Form></Form>
      <DiscussionList discussions={discussions}></DiscussionList>
    </div>
  );
}


function Header() {
  return (
    <div>
      <h1>안녕,<br></br>여기는<br></br>아고라 스테이츠</h1>
    </div>
  )
}

function Form() {
  return(
    <form className="form">
      <div className="deco">&lt;</div>
        <div className="form__input--wrapper">       
          <div className="form__input--name">
            <input type="text" name="name" id="name" required placeholder="Your name"></input>
          </div>
          <div className="form__input--title">
            <input type="text" name="name" id="name" required placeholder="Your title"></input>
          </div>
          <div className="form__textbox">
            <textarea id="story" name="story" placeholder="Your question" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="submit !"></input>
        </div>
        <div className="deco">&#47;&gt;</div>
    </form>
  )
}



function DiscussionList({discussions}) {
  return (
    <section className="discussion__wrapper">
    <ul className="discussions__container">
      {discussions.map((discussion)=> (
        <Discussion
          key={discussion.id}
          discussion={discussion}
        />
      ))}
    </ul>
  </section>
  )
}

function Discussion({discussion}){
  const {createdAt, title, url, author, answer, avatarUrl} = discussion;
  return (
    <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image"
            src={avatarUrl}
            alt={`avatar of ${author}`}/>
        </div>
        <div className="discussion__content">
          <h3 className="discussion__title">
            <a href={url}>{title}</a>
          </h3>
          <div className="discussion__information">{`${author} / ${new Date(createdAt).toLocaleString("Ko-KR")}`}</div>
        </div>
        <div className="discussion__answered">
          <p>☑︎</p>
        </div>
      </li>
  )
}


export default App;
