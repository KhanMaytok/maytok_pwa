import React from 'react';

export default function (props) {
	return (		
        <section className="note">
        <div className="section-container">

            <h3 className="post-title"><a href="single-post.html">Daily notes</a></h3>
            <span className="post-date">11 Dec 2013</span>



            <p>Lorem ipsum dolor sit amet, accumsan taciti. Non ridiculus nullam, in posuere cursus aliquam ipsum, dolor dui, mattis at conubia. Fermentum velit, in mauris tellus, porta arcu, mauris eget nec urna rutrum, suspendisse dui. Malesuada nec sapien, mauris elit eros et, tristique ultricies magna at. </p>


            <p>also i love columns...</p>

            <div className="pure-g">
                <div className="pure-u-1-3 l-box">
                    <p>Dictumst tincidunt vestibulum vivamus, aliquam massa mi amet. Eget varius dapibus.</p>
                </div>

                <div className="pure-u-1-3 l-box">
                    <p>Dictumst tincidunt vestibulum vivamus, aliquam massa mi amet. Eget varius dapibus.</p>
                </div>

                <div className="pure-u-1-3 l-box">
                    <p>Dictumst tincidunt vestibulum vivamus, aliquam massa mi amet. Eget varius dapibus.</p>
                </div>
            </div>


            <div className="section-footer clearfix">
                <a href="category.html"><i className="fa fa-folder-open"></i> Notes</a>
                <a className="read-more float-right" href="category.html"><i className="fa fa-link"></i> Read more...</a>
                <a className="float-right" href="category.html"><i className="fa fa-comments"></i> 1 comment</a>
            </div>
        </div>
    </section>
	);
}
