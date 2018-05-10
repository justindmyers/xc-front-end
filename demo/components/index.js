import Vue from 'vue';

// Layouts
import CLPDashboard from './clp/layouts/dashboard.vue';

// CLP Components
import ButtonLinkBar from './clp/button-link-bar.vue';
import DocumentRepository from './clp/document-repository.vue';
import LeaderList from './clp/leader-list.vue';
import LeaderSnapshotItem from './clp/leader-snapshot-item.vue';
import MemberBreakdown from './clp/member-breakdown.vue';
import Updates from './clp/updates.vue';

// Layouts
Vue.component('clp-dashboard', CLPDashboard);

// CLP Components
Vue.component('button-link-bar', ButtonLinkBar);
Vue.component('document-repository', DocumentRepository);
Vue.component('leader-list', LeaderList);
Vue.component('leader-snapshot-item', LeaderSnapshotItem);
Vue.component('member-breakdown', MemberBreakdown);
Vue.component('updates', Updates);
