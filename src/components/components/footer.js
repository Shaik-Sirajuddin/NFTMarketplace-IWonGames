import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light" style={{"marginBlock":10,"paddingBlock":10}}>
            {/* <div className="container">
                <div className="row">
                    
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Resources</h5>
                            <ul>
                                <li><Link to="">Help Center</Link></li>
                                <li><Link to="">Partners</Link></li>
                                <li><Link to="">Suggestions</Link></li>
                                <li><Link to="">Discord</Link></li>
                                <li><Link to="">Docs</Link></li>
                                <li><Link to="">Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5>Community</h5>
                            <ul>
                                <li><Link to="">Community</Link></li>
                                <li><Link to="">Documentation</Link></li>
                                <li><Link to="">Brand Assets</Link></li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">Forum</Link></li>
                                <li><Link to="">Mailing List</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div> */}
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <span className="copy"><ul>
                                            <li><Link to="">Privacy policy</Link></li>
                                            <li><Link to="">Terms and Conditions</Link></li>
                                            </ul></span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-facebook fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-twitter fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-linkedin fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-pinterest fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-rss fa-lg"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;