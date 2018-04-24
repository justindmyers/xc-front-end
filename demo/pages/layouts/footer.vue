<template>
    <div>
        <div class="container container-fluid">
            <h1 class="page-heading">Footer</h1>
        </div>
        
        <footer class="l-footer">
            <div class="l-footer__section">
                <div class="container container-fluid">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 l-footer__nav">
                            <div class="l-footer__logo">
                                <img src="//placehold.it/200x80" alt="" />
                            </div>

                            <button v-b-toggle.collapse1 class="btn btn-link-plain btn--select ">
                                <div class="h6">Contact Us</div>
                            </button>

                            <b-collapse id="collapse1" :visible="false">
                                <p>7272 Greenville Ave.<br />
                                Dallas, TX 75231<br /><br />

                                Customer Service<br />
                                1-800-AHA-USA-1<br />
                                1-800-242-8721<br />
                                1-888-474-VIVE<br />
                                <strong>Give Us Your Feedback</strong></p>
                            </b-collapse>
                        </div>
                        <div class="col-sm-6 col-md-3 l-footer__nav">
                            <div class="h6 l-footer__nav-title">About Us</div>

                            <button v-b-toggle.collapse2 class="btn btn-link-plain btn--select">
                                <div class="h6">About Us</div>
                            </button>

                            <b-collapse id="collapse2" :visible="false">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a href="#">About the AHA/ASA</a></li>
                                    <li class="nav-item"><a href="#">2015-16 Annual Report</a></li>
                                    <li class="nav-item"><a href="#">2015-16 Diversity &amp; Inclusion Report</a></li>
                                    <li class="nav-item"><a href="#">AHA Financial Information</a></li>
                                    <li class="nav-item"><a href="#">Careers</a></li>
                                    <li class="nav-item"><a href="#">SHOP</a></li>
                                    <li class="nav-item"><a href="#">Latest Heart and Stroke News</a></li>
                                    <li class="nav-item"><a href="#">AHA/ASA Media Newsroom</a></li>
                                </ul>
                            </b-collapse>
                        </div>
                        <div class="col-sm-6 col-md-3 l-footer__nav">
                            <div class="h6 l-footer__nav-title">Our Causes</div>

                            <button v-b-toggle.collapse3 class="btn btn-link-plain btn--select ">
                                <div class="h6">Our Causes</div>
                            </button>

                            <b-collapse id="collapse3" :visible="false">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a href="#">Go Red For Women</a></li>
                                    <li class="nav-item"><a href="#">2Ro Red Por Tu Curazon</a></li>
                                    <li class="nav-item"><a href="#">Healthy Living</a></li>
                                    <li class="nav-item"><a href="#">EmPOWERED to Serve</a></li>
                                    <li class="nav-item"><a href="#">The Warning Signs</a></li>
                                    <li class="nav-item"><a href="#">Online Communities</a></li>
                                    <li class="nav-item"><a href="#">Heart &amp; Stroke Encyclopedia</a></li>
                                    <li class="nav-item"><a href="#">Volunteer</a></li>
                                </ul>
                            </b-collapse>
                        </div>
                        <div class="col-sm-6 col-md-3 l-footer__nav">
                            <div class="h6 l-footer__nav-title">Our Sites</div>

                            <button v-b-toggle.collapse4 class="btn btn-link-plain btn--select ">
                                <div class="h6">Our Sites</div>
                            </button>

                            <b-collapse id="collapse4" :visible="false">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a href="#">American Heart Association</a></li>
                                    <li class="nav-item"><a href="#">American Stroke Association</a></li>
                                    <li class="nav-item"><a href="#">My Life Check</a></li>
                                    <li class="nav-item"><a href="#">Professional Heart Daily</a></li>
                                    <li class="nav-item"><a href="#">Scientific Sessions</a></li>
                                    <li class="nav-item"><a href="#">Stroke Conference</a></li>
                                    <li class="nav-item"><a href="#">You're The Cure</a></li>
                                    <li class="nav-item"><a href="#">Global Programs</a></li>
                                    <li class="nav-item"><a href="#">eBooks</a></li>
                                </ul>
                            </b-collapse>
                        </div>
                    </div>
                </div>
            </div>

            <div class="l-footer__section">
                <div class="container container-fluid l-footer__social">
                    <ul class="nav l-icon-nav">
                        <li><a href="http://www.twitter.com/American_Heart"><img src="assets/share/twitter-gray.svg" /></a></li>
                        <li><a href="https://www.facebook.com/AmericanHeart"><img src="assets/share/facebook-gray.svg" /></a></li>
                        <li><a href="https://plus.google.com/+AmericanHeart"><img src="assets/share/google-plus-gray.svg" /></a></li>
                        <li><a href="http://instagram.com/american_heart"><img src="assets/share/instagram-gray.svg" /></a></li>
                        <li><a href="https://www.youtube.com/user/americanheartassoc"><img src="assets/share/youtube-gray.svg" /></a></li>
                        <li><a href="https://www.linkedin.com/company/american-heart-association"><img src="assets/share/linkedin-gray.svg" /></a></li>
                        <li><a href="http://www.pinterest.com/americanheart/"><img src="assets/share/pinterest-gray.svg" /></a></li>
                    </ul>

                    <div class="l-footer__logos">
                        <ul class="nav l-icon-nav">
                            <li><img src="//placehold.it/71x61" /></li>
                            <li><img src="//placehold.it/61x63" /></li>
                            <li><img src="//placehold.it/36x63" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="l-footer__section">
                <div class="container container-fluid">
                    <ul class="nav l-divider-link-nav l-footer__supplemental-nav">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Copyright</a></li>
                        <li><a href="#">Ethics Policy</a></li>
                        <li><a href="#">Conflit of Interest Policy</a></li>
                        <li><a href="#">Linking Policy</a></li>
                        <li><a href="#">Diversity</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Suppliers &amp; Providers</a></li>
                        <li><a href="#">Accessibility Statement</a></li>
                    </ul>

                    <div class="l-footer__copyright">
                        <p>&copy;2017 American Heart Association, Inc. All rights reserved. Unauthorized use prohibited.<br />
                            The American Heart Association is a qualified 501(c)(3) tax-exempt organization. <br />
                            *Red Dress ™ DHHS, Go Red ™ AHA ; National Wear Red Day® is a registered trademark.
                        </p>
                    </div>

                    <div class="l-footer__compliance">
                        <img src="//placehold.it/40x60" />
                        <div class="l-footer__compliance-text">
                            <p>This site complies with the HONcode standard for trustworthy health information: verify here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
