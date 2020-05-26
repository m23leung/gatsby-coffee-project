import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem
                         </p>
                         <Link to="/about/">
                            <button className="text-uppercase btn-yellow">about page</button>
                         </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
