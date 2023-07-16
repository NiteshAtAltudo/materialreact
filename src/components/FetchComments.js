import { useState, useEffect } from "react";

function FetchComments() {
  const [data, setData] = useState(null);
  const token = "OjRueWFmZGxxdWxubHBqaHR0ZWxsN2VyaXdyd2M3bWVhNmcycnpqNHk3b21wamlnY2NrdWE=";
  const headerOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`
    }
  }

  useEffect(() => {
    fetch('https://dev.azure.com/nitesh727/Dashboard/_apis/git/repositories/a00dfb0c-b63b-443a-a473-c6f10c3d1b93/pullRequests/1/threads/4/Comments?api-version=7.0',
    headerOptions)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default FetchComments;