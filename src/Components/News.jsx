import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const News = () => {
    const {data} = useLoaderData();
    // console.log(data);
    return (
        <div>
            {
                data.map(newsCard => <NewsCard news={newsCard} key={newsCard._id}></NewsCard>)
            }
        </div>
    );
};

export default News;