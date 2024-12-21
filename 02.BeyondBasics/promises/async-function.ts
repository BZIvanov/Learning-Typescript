const fetchData = async (): Promise<any> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

fetchData().then((data) => console.log(data));
