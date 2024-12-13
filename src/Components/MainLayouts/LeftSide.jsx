import { useEffect, useState } from "react";


const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(result => result.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    // // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    // //   }
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-xl mb-2">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 ">
                {
                    categories.map(category => <button className="btn font-semibold text-xl" key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftSide;