import React from 'react'
import './cards.css'
import { Redirect } from 'react-router-dom';

export default function SearchBar({searchState , history}) {

    function handleSubmit (e) {
        e.preventDefault();
        // console.log(e.target.querySelector('input').value);

        

        let text = e.target.querySelector('input').value;

       let textUpdated = text.split(" ");
       const andRegex = new RegExp ('(a|A)(n|N)(d|D)$');

         if (textUpdated.length > 0){
           textUpdated =  textUpdated.map(word => {

               if (!(andRegex.test(word))){
               return( word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                } else{
                    return word.toLowerCase()
                }           
        })
        }

        // console.log("textUpdated => ", textUpdated);

// Add all strings in array
        let searchText = textUpdated.reduce((acc , word)=> acc + " " + word);
       
        console.log(searchText);

        searchState(searchText);
    }


    return (
        <div className="search_bar_container">
            <form onSubmit = {handleSubmit} >
                <input className="search_bar_input" type="text" placeholder="Eg: Maharashtra"/>
            </form>
        </div>
    )
}
