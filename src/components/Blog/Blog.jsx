import React from 'react'
import Title from '../Title/Title';
import {Link} from 'react-router-dom';


export default function Blog() {
    return (
        <section id="Blog">
        <div className="container-fluid p-5 " >
        <div className="m-3" ><Title title="Blogs" /></div>
        <div className="row justify-content-center">

            <div className="col-lg-3 col-sm-12  card bg-light rounded-lg shadow-lg m-3 p-5 ">
                <Link to="/blog">
                    <p className="h2 text-dark  " >Title is just like this</p>
                    <p className="text-dark text-muted" >Tags</p>
                    <p className="text-start text-dark  text-truncate" >Lorem ipsum dolor sit amet consectetur adipisicing elit.Unde, explicabo!</p>
                </Link>
            </div>
            <div className="col-lg-3 col-sm-12 card bg-light rounded-lg shadow-lg m-3 p-5 ">
            <Link to="/blog">
                <p className="h2 text-dark" >Title and more like this one </p>
                <p className="text-dark text-muted" >Tags</p>
                <p className="text-start text-dark text-truncate" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, esse!</p>
            </Link>
            </div>
            <div className="col-lg-3 col-sm-12 card bg-light rounded-lg shadow-lg m-3 p-5 ">
            <Link to="/blog">
                <p className="h2 text-dark" >Title can be short like this</p>
                <p className="text-dark text-muted" >Tags</p>
                <p className="text-start text-dark text-truncate" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, modi.</p>
            </Link>
            </div>
            
        </div>            
        </div>
    </section>

    )
}
