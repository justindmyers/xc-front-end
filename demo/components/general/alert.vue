<template>
    <aha-notification notification-id="test">
        <div class="c-alert">
            <div class="container c-alert__container">
                <div class="c-alert__message">
                    <span class="c-alert__kicker">Take Action</span>
                    <a href="#" class="c-alert__content">Help those affected by recent catastrophic storms</a>
                </div>

                <div class="c-alert__actions">
                    <a href="#" class="c-alert__cta btn btn-round btn-light">Get Involved</a>
                    <button type="button" class="c-alert__close btn btn-dark" aria-label="Close" ref="test">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </aha-notification>
</template>