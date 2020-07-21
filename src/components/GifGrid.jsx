import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // PARA ESPERA DE EVENTOS
  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  // HOOK PERSONALIZADO
  const { data:imgs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounce">{category.toUpperCase()}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {imgs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
