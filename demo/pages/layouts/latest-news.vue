<template>
    <div>
        <div class="container container-fluid">
            <h1 class="page-heading mb-4">Latest News</h1>
        </div>

        <section class="container container-fluid">
            <div class="c-listing-header">
                <h1 class="c-listing-header__heading">Latest News</h1>

                <div class="c-listing-header__cta-container">
                    <p class="c-listing-header__subheading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a class="c-listing-header__cta c-cta c-cta--arrow h-theme--black" href="#">Read All News Stories</a>
                </div>
            </div>

            <div class="row">
                <div class="col-md-8">
                        <aha-article-large class="d-none d-md-block"></aha-article-large>

                        <aha-article-medium class="d-md-none"></aha-article-medium>

                        <div class="row">
                            <div class="col-md-6">
                                <aha-article-small></aha-article-small>
                            </div>

                            <div class="col-md-6">
                                <aha-article-small></aha-article-small>
                            </div>
                        </div>
                </div>

                <div class="col-md-4">
                    <ul class="l-article-list">
                        <li class="l-article-list__item">
                            <aha-article-xsmall></aha-article-xsmall>
                        </li>

                        <li class="l-article-list__item">
                            <aha-article-xsmall></aha-article-xsmall>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>