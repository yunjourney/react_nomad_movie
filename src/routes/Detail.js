import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovieDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);

  return <div>
    {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movieDetail.large_cover_image} alt="coverImg"/>
          <h1>{movieDetail.title}</h1>
        </div>
      )}
  </div>;
}

export default Detail;
