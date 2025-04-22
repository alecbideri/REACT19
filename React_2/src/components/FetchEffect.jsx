import React, { useEffect, useState } from "react";

const FetchEffect = () => {
  const [data, setData] = useState([]);

  // Fetch fake data from the fake api

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const data = await response.json();

      if (data && data.length) setData(data);
    }

    loadData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((post) => (
          <section key={Math.random()}>
            <li>{post.title}</li>
            <li>-- body : {post.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default FetchEffect;
