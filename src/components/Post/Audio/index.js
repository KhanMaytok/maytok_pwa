import React from 'react';

export default function (props) {
	return (		
        <section className="audio-post-type">

        <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120851742&amp;color=ff6600&amp;auto_play=false&amp;show_artwork=true"></iframe>

        <div className="section-container">

            <h3 className="post-title"><a href="single-post.html">Soraya - Plastic</a></h3>
            <span className="post-date">31 Oct 2013</span>

            <p>Lorem ipsum dolor sit amet, accumsan taciti. Non ridiculus nullam, in posuere cursus aliquam ipsum, dolor dui, mattis at conubia. Fermentum velit, in mauris tellus, porta arcu, mauris eget nec urna rutrum, suspendisse dui. Malesuada nec sapien, mauris elit eros et, tristique ultricies magna at. </p>

            <div className="section-footer clearfix">
                <a href="category.html"><i className="fa fa-folder-open"></i> Inspiration</a>
                <a className="read-more float-right" href="category.html"><i className="fa fa-link"></i> Read more...</a>
                <a className="float-right" href="category.html"><i className="fa fa-comments"></i> no comment</a>
            </div>
        </div>
    </section>
    );
}
