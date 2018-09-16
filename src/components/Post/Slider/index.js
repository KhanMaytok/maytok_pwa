import React from 'react';

export default function (props) {
	return (		
        <section className="gallery-post-type">
        <div className="flexslider">
            <ul className="slides">
                <li data-thumb="temp-files/apple-products-1.jpg">
                    <img src="temp-files/apple-products-1.jpg" />
                </li>
                <li data-thumb="temp-files/apple-products-2.jpg">
                    <img src="temp-files/apple-products-2.jpg" />
                </li>
            </ul>
        </div>
        <div className="section-container">

            <h3 className="post-title"><a href="single-post.html">My Daily Items</a></h3>
            <span className="post-date">28 Dec 2013</span>


            <p>Lorem ipsum dolor sit amet, accumsan taciti. Non ridiculus nullam, in posuere cursus aliquam ipsum, dolor dui, mattis at conubia. Fermentum velit, in mauris tellus, porta arcu, mauris eget nec urna rutrum, suspendisse dui. Malesuada nec sapien, mauris elit eros et, tristique ultricies magna at. </p>

            <p>Id mauris feugiat nisl. Leo auctor mauris volutpat, pellentesque quis metus amet proin fringilla gravida, nulla arcu, condimentum est commodo donec non, suspendisse odio. Gravida elit quis vulputate urna dis, mattis suspendisse phasellus, suspendisse do vel posuere vel libero mi. Cras nec odio in. </p>



            <div className="section-footer clearfix">
                <a href="category.html"><i className="fa fa-folder-open"></i> Personal things</a>
                <a className="read-more float-right" href="category.html"><i className="fa fa-link"></i> Read more...</a>
                <a className="float-right" href="category.html"><i className="fa fa-comments"></i> 1 comment</a>
            </div>
        </div>
    </section>
	);
}
