<template>
    <div>
        <div class="container container-fluid">
            <h1 class="page-heading">Recipe</h1>
        </div>

        <section class="l-recipe-box container container-fluid">
            <ul class="l-recipe-box__nav nav nav-tabs">
                <li class="nav-item">
                    <a href="#" class="nav-link">Profile</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link active">Recipe Box</a>
                </li>
            </ul>

            <div class="row">
                <div class="col-md-8 col-lg-9">
                    <div class="c-listing-header c-listing-header--small">
                        <div class="c-listing-header__cta-container">
                            <h1 class="c-listing-header__heading">Appetizers</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <article class="c-article-card c-article-card--small">
                                <a href="#" class="c-article-card__link">
                                    <div class="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                                        <img src="assets/images/placeholder.gif" v-lazy-img="'//placehold.it/360x240/ddd/ccc?text=FPO'" />
                                    </div>

                                    <div class="c-article-card__content">
                                        <h3 class="c-article-card__title h5">Guacamole Deviled Eggs</h3>
                                        <div class="c-article-card__metadata">
                                            <ul class="c-macro-list">
                                                <li>226 Calories</li>
                                                <li>227g Sodium</li>
                                                <li>14g Fat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>

                                <div class="c-article-card__actions">
                                    <a href="#" title="Remove Guacamole Deviled Eggs from Appetizers">
                                        <span class="icon-solid-heart h-color--red"></span>
                                    </a>
                                </div>
                            </article>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <article class="c-article-card c-article-card--small">                                
                                <a href="#" class="c-article-card__link">
                                    <div class="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                                        <img src="assets/images/placeholder.gif" v-lazy-img="'//placehold.it/360x240/ddd/ccc?text=FPO'" />
                                    </div>

                                    <div class="c-arctile-card__content">
                                        <h3 class="c-article-card__title h5">Guacamole Deviled Eggs</h3>
                                        <div class="c-article-card__metadata">
                                            <ul class="c-macro-list">
                                                <li>226 Calories</li>
                                                <li>227g Sodium</li>
                                                <li>14g Fat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>

                                <div class="c-article-card__actions">
                                    <a href="#" title="Remove Guacamole Deviled Eggs from Appetizers">
                                        <span class="icon-solid-heart h-color--red"></span>
                                    </a>
                                </div>
                            </article>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <article class="c-article-card c-article-card--small">
                                <a href="#" class="c-article-card__link">
                                    <div class="c-article-card__background h-placeholder-image h-placeholder-image--3-2">
                                        <img src="assets/images/placeholder.gif" v-lazy-img="'//placehold.it/360x240/ddd/ccc?text=FPO'" />
                                    </div>

                                    <div class="c-arctile-card__content">
                                        <h3 class="c-article-card__title h5">Guacamole Deviled Eggs</h3>
                                        <div class="c-article-card__metadata">
                                            <ul class="c-macro-list">
                                                <li>226 Calories</li>
                                                <li>227g Sodium</li>
                                                <li>14g Fat</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>

                                <div class="c-article-card__actions">
                                    <a href="#" title="Remove Guacamole Deviled Eggs from Appetizers">
                                        <span class="icon-solid-heart h-color--red"></span>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-lg-3">
                    <div class="c-recipe-box-widget">
                        <div class="c-recipe-box-widget__header c-label c-label--red c-label--wide">
                            <h3 class="c-recipe-box-widget__heading h6">Recipe Box Folders</h3>
                            <a href="#" class="c-recipe-box-widget__edit c-cta h-color--white">Edit</a>
                        </div>

                        <nav class="c-recipe-box-widget__content">
                            <ul class="c-recipe-box-categories">
                                <li>
                                    <a href="#" class="c-recipe-box-categories__link">All (10)</a>
                                </li>
                                <li>
                                    <a href="#" class="c-recipe-box-categories__link is-active">Appetizers (3)</a>
                                </li>
                                <li>
                                    <a href="#" class="c-recipe-box-categories__link">Side Dishes (5)</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="c-recipe-box-widget">
                        <div class="c-recipe-box-widget__header c-label c-label--red c-label--wide">
                            <h3 class="c-recipe-box-widget__heading h6">Recipe Box Folders</h3>
                        </div>

                        <div class="c-recipe-box-widget__content clearfix">
                            <form action="#">
                                <ul class="c-recipe-box-categories">
                                    <li class="form-group">
                                        All (10)
                                    </li>

                                    <li class="form-group">
                                        <label class="sr-only" for="">Appetizers</label>

                                        <div class="input-group">
                                            <input class="form-control has-invalid-icon" id="" type="text" value="Appetizers" name="recipe-category['appetizers']" />

                                            <a href="#" class="input-validation-icon input-validation-icon--invalid" title="Delete Appetizers Folder">
                                                <i class="icon-times"></i>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="form-group">
                                        <label class="sr-only" for="">Side Dishes</label>

                                        <div class="input-group">
                                            <input class="form-control has-invalid-icon" id="" type="text" value="Side Dishes" name="recipe-category['side-dishes']" />

                                            <a href="#" class="input-validation-icon input-validation-icon--invalid" title="Delete Side Dishes Folder">
                                                <i class="icon-times"></i>
                                            </a>
                                        </div>
                                    </li>
                                </ul>

                                <input type="submit" value="Save" class="c-recipe-box-widget__submit btn btn-danger btn-round" />
                            </form>
                        </div>
                    </div>

                    <div class="c-recipe-box-widget">
                        <div class="c-recipe-box-widget__header c-label c-label--red c-label--wide">
                            <h3 class="c-recipe-box-widget__heading h6">Create New Folder</h3>
                        </div>

                        <div class="c-recipe-box-widget__content clearfix">
                            <form action="#">
                                <ul class="c-recipe-box-categories">
                                    <li class="form-group">
                                        <label class="sr-only" for="">New Folder Name</label>
                                        <input class="form-control" id="" type="text" placeholder="New Folder Name" name="" />
                                    </li>
                                </ul>

                                <input type="submit" value="Create" class="c-recipe-box-widget__submit btn btn-danger btn-round" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
