import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


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
                    categories.map(category => 
                    <NavLink to={`/category/${category.category_id}`} className="btn font-semibold text-xl text-[#403F3F]" key={category.category_id}>{category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSide;