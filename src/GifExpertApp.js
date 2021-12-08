import React,{useState} from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon ball Z'];

    const [categories, setCategories] = useState(['Avengers']);

    // const handleadd = () => {
    //     // setCategories( [...categories,'Ranma 1/2']);
    //     setCategories( cats => [...cats,'Ranma 1/2']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            

            <ol>
                {   
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        
                        />
                        
                    )) 
                    
                }

            </ol>
        </>
    )
}
