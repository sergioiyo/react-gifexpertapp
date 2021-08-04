import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= () =>{

    const [categories, setCategories] = useState(['Dragon ball']);

    // const handleAdd= () => {
    //     // setCategories( [...categories, 'Caballeros']);
    //     // setCategories( (c) => c.concat('Caballeros'));
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key= { category }
                            category= { category } 
                        />
                    ))
                }
            </ol>


        </>
    )
}

export default GifExpertApp;