import React from 'react';
import Navbar from '../components/Navbar';
import PostButton from '../components/PostButton';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FilterMenu from '../components/FilterMenu';
import PostCard from '../components/PostCard';
import styles from './HomePageStyles.module.css';

export default function HomePage() {

  const [postCards, setPosts] = React.useState([
    {
      "title": "",
      "postText": '',
      "comments": [],
      "upvotes": 0,
      "course": ''
    }
  ]);

  const [filter, setFilter] = React.useState<string>("");
  let [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const get_all_posts = async () => {
      console.log("all posts req")
      const baseURL = `http://localhost:8000/posts/all`
      try {
        const response = await fetch(baseURL, { headers: { "Content-type": "application/json" }, method: "GET" })
        const all_posts = await response.json()
        setPosts(all_posts.data);
      }
      catch (err) {
        throw new Error(`Unknown Error`)
      }
    }
    get_all_posts()
  }, []);

  React.useEffect(() => {
    const get_course_posts = async () => {
      const baseURL = `http://localhost:8000/posts/course/${filter.replace(" ", "+")}`
      try {
        const response = await fetch(baseURL, { headers: { "Content-type": "application/json" }, method: "GET" })
        const all_posts = await response.json()
        console.log("Changle about to occur")
        setPosts(all_posts.data);
      }
      catch (err) {
        throw new Error(`Unknown Error`)
      }
    }
    if (counter > 0){
      get_course_posts()
    }
    setCounter(prev => prev + 1)
    
  }, [filter, setFilter]);

  return (
    <div>
      <Navbar />
      <PostButton />
      <div className={styles.container}>
        <div className={styles.filterMenu}>
          <FilterMenu filter={filter} setFilter={setFilter}/>
        </div>
        <div className={styles.postCardContainer}>
          <PostCard postCards={postCards}/>
        </div>
      </div>
    </div >
  );
}