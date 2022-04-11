import { Link } from 'gatsby';
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <h1>Emilee and Quinn</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Engagement Photots</Link>
                <Link to="/wedding">Wedding</Link>
                <Link to="/">Travel</Link>
                <Link to="/">Song Requests</Link>
                <Link to="/">Registry</Link>
                <Link to="/rsvp">RSVP</Link>
            </div>
        </nav>
    );
};
