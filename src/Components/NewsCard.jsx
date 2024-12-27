

// eslint-disable-next-line react/prop-types
const NewsCard = ({news = {}}) => {
    // console.log(news)
    const {title,thumbnail_url
        } = news || {}
    return (
        <div className="p-3">
            <h2>{title}</h2>
           <img className="w-full h-[270px] object-cover" src={thumbnail_url} alt="" />
        </div>
    );
};

export default NewsCard;