<template>
    <div class="c-leader-list xc-flex__grid -center">        

        <div class="l-leader-list__wrap xc-flex__cell -column -col-12of12 -col-sm-10of12 -col-lg-10of12">

                <h2 class="c-leader-list__heading">Your Chapter's Leaders</h2>

                <div class="xc-flex__grid">

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                </div>

                <div class="c-leader-list__hidden-wrap xc-flex__grid h-collapse h-collapse--collapsed" id="leaderOverflow">

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                    <div class="xc-flex__cell -col-6of12 -col-sm-3of12 -col-lg-3of12">
                        <leader-snapshot-item></leader-snapshot-item>
                    </div>

                </div>

                <button data-collapse data-target="#leaderOverflow" class="c-leader-list__btn" aria-expanded="false" aria-controls="leaderOverflow">
                    See All 
                    <span class="c-leader-list__icon fa fa-plus"></span>
                </button>
            
        </div>
    </div>
</template>