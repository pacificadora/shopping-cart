import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function getData() {
    setloading(true)
    try {
      const data = await fetch(API_URL);
      const result = await data.json()
      setPosts(result)
    } catch (error) {
      console.error("server encountered an error", error);
      setPosts([])
    }
    setloading(false)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {
        loading ? (<Spinner></Spinner>) :
          (
            posts.length > 0 ?
              (<div>
                {
                  posts.map((post) => (<Product key={post.id} post={post}></Product>))
                }
              </div>) :
              (<div>No Data Found</div>)
          )
      }
    </div>
  )
};

export default Home;
