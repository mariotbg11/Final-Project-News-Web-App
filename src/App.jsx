import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [indonesiaNews, setIndonesiaNews] = useState([]);
  const [programmingNews, setProgrammingNews] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Indonesia&fq=headline:("Indonesia") AND document_type:("article")&api-key=${apiKey}`;

    async function getIndonesiaNews() {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setIndonesiaNews(data.response.docs);
    }
    getIndonesiaNews();
  }, []);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Computer&fq=section_name:("Technology")&api-key=${apiKey}`;

    async function getProgrammingNews() {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setProgrammingNews(data.response.docs);
    }
    getProgrammingNews();
  }, []);

  return (
    <>
      <Navbar />
      <Header />;
    </>
  );
}

export default App;
