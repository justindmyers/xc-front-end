import Vue from 'vue';

// CLP Layouts
import CLPDashboard from './clp/layouts/dashboard/dashboard.vue';

// CLP Components
import ButtonLinkBar from './clp/components/button-link-bar/button-link-bar.vue';
import DocumentRepository from './clp/components/document-repository/document-repository.vue';
import LeaderList from './clp/components/leader-list/leader-list.vue';
import LeaderSnapshotItem from './clp/components/leader-snapshot-item/leader-snapshot-item.vue';
import MemberBreakdown from './clp/components/member-breakdown/member-breakdown.vue';
import MemberRenewal from './clp/components/member-renewal/member-renewal.vue';
import Updates from './clp/components/updates/updates.vue';

// Layouts
Vue.component('clp-dashboard', CLPDashboard);

// CLP Components
Vue.component('button-link-bar', ButtonLinkBar);
Vue.component('document-repository', DocumentRepository);
Vue.component('leader-list', LeaderList);
Vue.component('leader-snapshot-item', LeaderSnapshotItem);
Vue.component('member-breakdown', MemberBreakdown);
Vue.component('member-renewal', MemberRenewal);
Vue.component('updates', Updates);
