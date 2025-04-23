import React, { useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = React.useState([]);

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
        {data.map((posts) => (
          <section key={posts.id}>
            <li>{posts.title}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default FetchDataEffect;
