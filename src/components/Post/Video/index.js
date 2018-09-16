import React from 'react';

export default function (props) {
	return (		
        <section className="video-post-type">

        <iframe src="http://player.vimeo.com/video/23282730?portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

        <div className="section-container">

            <h3 className="post-title"><a href="single-post.html">Plan of the city</a></h3>
            <span className="post-date">8 Nov 2013</span>


            <p>Lorem ipsum dolor sit amet, accumsan taciti. Non ridiculus nullam, in posuere cursus aliquam ipsum, dolor dui, mattis at conubia. Fermentum velit, in mauris tellus, porta arcu, mauris eget nec urna rutrum, suspendisse dui. Malesuada nec sapien, mauris elit eros et, tristique ultricies magna at. </p>

            <p>Id mauris feugiat nisl. Leo auctor mauris volutpat, pellentesque quis metus amet proin fringilla gravida, nulla arcu, condimentum est commodo donec non, suspendisse odio. Gravida elit quis vulputate urna dis, mattis suspendisse phasellus, suspendisse do vel posuere vel libero mi. Cras nec odio in. </p><p>Dictumst tincidunt vestibulum vivamus, aliquam massa mi amet. Eget varius dapibus.</p>

            <div className="section-footer clearfix">
                <a href="category.html"><i className="fa fa-folder-open"></i> Inspiration</a>
                <a className="read-more float-right" href="category.html"><i className="fa fa-link"></i> Read more...</a>
                <a className="float-right" href="category.html"><i className="fa fa-comments"></i> 1 comment</a>
            </div>
        </div>
    </section>
    );
}
