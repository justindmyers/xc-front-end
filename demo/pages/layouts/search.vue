<template>
    <div class="container container-fluid">
        <h1 class="page-heading">Search Layout</h1>

        <div class="l-search">
            <aha-inline-search></aha-inline-search>

            <ul class="l-search__nav nav nav-tabs nav-tabs--centered">
                <li class="nav-item">
                    <a href="#" class="nav-link active">Tab</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Tab</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Tab</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Tab</a>
                </li>
            </ul>

            <header class="l-search__header">
                <div class="l-search__heading">
                    <h2 class="h4">Search results for: <i>"lorem"</i></h2>
                    <p class="h4 h-color--gray"><i>120 results</i></p>
                </div>

                <aha-search-results-form action="">
                    <template slot-scope="slotProps">
                        <!-- Set the saved query here -->
                        <input type="hidden" name="query" value="lorem">

                        <div class="l-search__options">
                            <div class="l-search__filters">
                                <div class="c-search-group form-group form-group--horizontal">
                                    <label class="c-search-group__label col-form-label">Sort by:</label>

                                    <aha-select-dropdown input-name="sort-by" v-model="slotProps.sortBy" position="left" default-value="Most Relevant" toggle-class="c-search-group__dropdown btn btn-white btn--select">
                                        <!-- Used to hold styling while JS is loading -->
                                        <span class="c-search-group__dropdown btn btn-lg btn-white btn--select">Most Relevant</span>

                                        <template slot="dropdown">
                                            <ul class="c-select-dropdown__list">
                                                <li>
                                                    <aha-select-dropdown-item text="Most Relevant" value="most-relevant-1" item-class="c-select-dropdown__item">Most Relevant</aha-select-dropdown-item>
                                                </li>
                                                <li>
                                                    <aha-select-dropdown-item text="Option 2" value="option-2" item-class="c-select-dropdown__item">Option 2</aha-select-dropdown-item>
                                                </li>
                                            </ul>
                                        </template>
                                    </aha-select-dropdown>
                                </div>

                                <div class="form-group form-group--horizontal">
                                    <label class="c-search-group__label col-form-label">Results per page</label>

                                    <aha-select-dropdown input-name="num-results" v-model="slotProps.numResults" position="right" default-value="20" toggle-class="c-search-group__dropdown btn btn-white btn--select">
                                        <!-- Used to hold styling while JS is loading -->
                                        <span class="c-search-group__dropdown btn btn-lg btn-white btn--select">20</span>

                                        <template slot="dropdown">
                                            <ul class="c-select-dropdown__list">
                                                <li>
                                                    <aha-select-dropdown-item text="10" item-class="c-select-dropdown__item">10</aha-select-dropdown-item>
                                                </li>
                                                <li>
                                                    <aha-select-dropdown-item text="20" item-class="c-select-dropdown__item">20</aha-select-dropdown-item>
                                                </li>
                                            </ul>
                                        </template>
                                    </aha-select-dropdown>
                                </div>
                            </div>

                            <div class="l-search__paging">
                                <nav aria-label="Search Results Pagination">
                                    <ul class="pagination pagination-lg pagination--page-count">
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
                            </div>
                        </div>
                    </template>
                </aha-search-results-form>
            </header>

            <div class="content">
                <!-- Set counter-reset to one less than the actual number to start -->
                <ol class="c-search-results__list" style="counter-reset: search-counter 9">
                    <li class="c-search-results__item">
                        <div class="c-search-results__media">
                            <div class="h-placeholder-image h-placeholder-image--1-1">
                                <img src="//placehold.it/100x100?text=FPO" v-lazy-img="'//placehold.it/100x100?text=FPO'" alt="" />
                            </div>
                        </div>

                        <div class="c-search-results__content">
                            <a href="#" class="c-search-results__link">
                                <span class="c-search-results__counter"></span> American <strong class="h-color--red">Stroke</strong> Association&hellip;
                            </a>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci bibendum, tincidunt justo vel, finibus dolor. Integer non ullamcorper ante. Nam feugiat turpis laoreet neque lobortis congue. Nunc feugiat lacinia tortor, et rutrum enim placerat et. Vestibulum ornare sem nibh, vel finibus ipsum ornare a.</p>
                        </div>
                    </li>

                    <li class="c-search-results__item">
                        <div class="c-search-results__media">
                            <div class="h-placeholder-image h-placeholder-image--1-1">
                                <img src="//placehold.it/100x100?text=FPO" v-lazy-img="'//placehold.it/100x100?text=FPO'" alt="" />
                            </div>
                        </div>

                        <div class="c-search-results__content">
                            <a href="#" class="c-search-results__link">
                                <span class="c-search-results__counter"></span> American <strong class="h-color--red">Stroke</strong> Association&hellip;
                            </a>

                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. Sed ac orci bibendum, tincidunt justo vel, finibus dolor. Integer non ullamcorper ante. Nam feugiat turpis laoreet neque lobortis congue. Nunc feugiat lacinia tortor, et rutrum enim placerat et. Vestibulum ornare sem nibh, vel finibus ipsum ornare a.</p>
                        </div>
                    </li>

                    <li class="c-search-results__item">
                        <div class="c-search-results__media">
                            <div class="h-placeholder-image h-placeholder-image--1-1">
                                <img src="//placehold.it/100x100?text=FPO" v-lazy-img="'//placehold.it/100x100?text=FPO'" alt="" />
                            </div>
                        </div>

                        <div class="c-search-results__content">
                            <a href="#" class="c-search-results__link">
                                <span class="c-search-results__counter"></span> American <strong class="h-color--red">Stroke</strong> Association&hellip;
                            </a>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci bibendum, tincidunt justo vel, finibus dolor. Integer non ullamcorper ante. Nam feugiat turpis laoreet neque lobortis congue. Nunc feugiat lacinia tortor, et rutrum enim placerat et. Vestibulum ornare sem nibh, vel finibus ipsum ornare a.</p>
                        </div>
                    </li>
                </ol>
            </div>

            <div>
                <nav aria-label="Search Results Pagination">
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
            </div>
        </div>
    </div>
</template>