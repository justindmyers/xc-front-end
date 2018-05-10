<template>
    <div class="l-clp-dashboard">

        <div class="c-section">
            <button-link-bar></button-link-bar>
        </div>
         
        <div class="c-section">
            <div class="xc-flex__grid">

                <div class="xc-flex__cell -col-12of12 -col-sm-8of12 -sm-equal">
                    <updates></updates>
                </div>

                <div class="xc-flex__cell -col-12of12 -col-sm-4of12 -sm-equal">
                    <document-repository></document-repository>
                </div>

            </div>
        </div>

        <div class="c-section c-section--shadow">
            <chapter-stats></chapter-stats>
        </div>

        <div class="c-section">
            <leader-list></leader-list>
        </div>

    </div>
</template>