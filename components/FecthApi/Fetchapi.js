import { useEffect, useState } from "react";
import styles from "./FetchApi.module.scss";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className={styles.backGround}>
      <h1>API FATCHING Posts</h1>
      {!data && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title, body }) => (
            <div className={styles.main}>
              <div className={styles.overflow}>
                <li key={id}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              </div>
              <div className={styles.emoji}>
              
                
                <h1>&#128075;</h1>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};
export default FetchApi;
