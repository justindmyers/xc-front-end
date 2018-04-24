<template>
    <div>
        <div class="container container-fluid">
            <h1 class="page-heading">News Listing</h1>
        </div>

        <section class="container container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <aha-article-listing></aha-article-listing>
                </div>

                <div class="col-md-6">
                    <aha-article-listing></aha-article-listing>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <aha-article-listing></aha-article-listing>
                </div>

                <div class="col-md-6">
                    <aha-article-listing></aha-article-listing>
                </div>
            </div>

            <nav>
                <ul class="pagination pagination-lg pagination--page-count pagination--right">
                    <li class="page-item disabled">
                        <span class="page-link">
                            <i class="icon-left-arrow"></i>
                            <span class="sr-only">Previous</span>
                        </span>
                    </li>

                    <li class="page-item page-item--page-count">
                        1 of 10
                    </li>

                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="icon-right-arrow"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    </div>
</template>