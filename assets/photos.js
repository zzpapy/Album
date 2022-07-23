// $("#click").on('click', (e) => {
//     e.preventDefault()
//     let url = $(e.target).data('url')
//     $.post(url, $( "#tchat").serialize(),function (json) {
//         console.log(Object.values(json.message))
//         $(".listMess").html("")
//         Object.values(json.message).forEach(element => {
//             $(".listMess").append( "<div><p>"+element.user+"</p><p>"+element.text+"</p></div>")
            
//         });
//         console.log(json.message)
       
       
//     },"json" ).done( function (result) { 
//         console.log(result.message)
//         result.message.forEach(element => {
//             console.log(element)
            
//         });
//     })
// })

import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React , { useEffect, useState }from 'react';




class App extends React.Component {
   
    constructor(props) {
        super(props);   
       
        this.state = {
            photos : {},
           
            };
           
    }
  
    
    componentDidMount() {
        const url = "photos"
        fetch(url)
        .then(async res => {
            console.log(res)
        return res.json()
        })
        .then(async res => {
            let listPhotos = []
            res.photos.map(el => {
                let test = el.replace("jpg","jpg")
                listPhotos.push(require("./photos/"+test))
            })
            this.setState({photos : listPhotos}) 
            
            })
            .catch(er => console.error(er))     
    }
   
        render() {
    return (
            <div className="container">
                {this.state.photos.length != undefined ?  this.state.photos.map(el =>{
                    return (
                        <div className="photos">
                            <img src={el} ></img>
                        </div>
                    )
                }) :null}
                test
            </div>     
        ) 
    }
    
}
if(document.getElementById('photos') != null){
    const container = document.getElementById('photos')
    const root = createRoot(container);
    root.render(<App />);

}