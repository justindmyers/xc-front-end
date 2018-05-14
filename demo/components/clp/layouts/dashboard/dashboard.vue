<template>

    <!-- Sitecore Devs: Ignore any 'v-html=""' tags in this file. This is Demo specific and won't be used in the Sitecore component -->

    <div class="l-clp-dashboard">

        <div v-html="buttonLinkBar" class="c-section">

            <!-- ../../components/button-link-bar/button-link-bar.html -->

        </div>
         
        <div class="c-section">
            <div class="xc-flex__grid">

                <div v-html="updates" class="xc-flex__cell -col-12of12 -col-sm-8of12 -sm-equal">

                    <!-- ../../components/updates/updates.html -->

                </div>

                <div v-html="documentRepository" class="xc-flex__cell -col-12of12 -col-sm-4of12 -sm-equal">

                    <!-- ../../components/document-repository/document-repository.html -->

                </div>

            </div>
        </div>

        <div class="c-section c-section--shadow">

           <div class="c-chapter-stats xc-flex__grid -center -middle">

                <div class="c-chapter-stats__wrap xc-flex__cell -col-12of12">

                    <h2 class="c-chapter-stats__heading">Chapter Stats</h2>

                    <p class="c-chapter-stats__month">As of 00 Month 2018</p>

                    <div class="xc-flex__grid">

                        <div v-html="memberBreakdown" class="xc-flex__cell -col-12of12 -col-sm-6of12 -sm-equal">

                            <!-- ../../components/member-breakdown/member-breakdown.html -->

                        </div>

                        <div v-html="memberRenewal" class="xc-flex__cell -col-12of12 -col-sm-6of12 -sm-equal">

                            <!-- ../../components/member-renewal/member-renewal.html -->
                            
                        </div>

                    </div>
                
                </div>

            </div>

        </div>

        <div v-html="leaderList" class="c-section">

            <!-- ../../components/leader-list/leader-list.html -->
            <leader-list></leader-list>

        </div>

    </div>

    <!-- Sitecore Devs: Ignore any 'v-html=""' tags in this file. This is Demo specific and won't be used in the Sitecore component -->

</template>

<script>
    export default {
        data () {
            return {
                buttonLinkBar: require('../../components/button-link-bar/button-link-bar.html'),
                updates: require('../../components/updates/updates.html'),
                documentRepository: require('../../components/document-repository/document-repository.html'),
                memberBreakdown: require('../../components/member-breakdown/member-breakdown.html'),
                memberBreakdown: require('../../components/member-breakdown/member-breakdown.html'),
                memberRenewal: require('../../components/member-renewal/member-renewal.html'),
                leaderList: require('../../components/leader-list/leader-list.html')
            }
        }
    }
</script>