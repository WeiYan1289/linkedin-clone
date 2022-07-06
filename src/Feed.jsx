import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp } from '@firebase/firestore'

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const colRef = collection(db, 'posts');

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    })
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: 'Tan Wei Yan',
      description: 'This is another test',
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
          <InputOption Icon={EventIcon} title="Event" color="#c0cbcd"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
        </div>
      </div>

      {/* Posts */}
      {posts.map(({id, data:{name, description, message, photoUrl}}) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl} 
        />
      ))}

      {/* <Post name='Tan Wei Yan' description='This is test' message='This worked' /> */}
    </div>
  )
}

export default Feed
