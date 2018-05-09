import Vue from 'vue';

// CLP Components
import ButtonLinkBar from './clp/button-link-bar.vue';
import DocumentRepository from './clp/document-repository.vue';
import LeaderList from './clp/leader-list.vue';
import LeaderSnapshotItem from './clp/leader-snapshot-item.vue';
import Updates from './clp/updates.vue';

Vue.component('button-link-bar', ButtonLinkBar);
Vue.component('document-repository', DocumentRepository);
Vue.component('leader-list', LeaderList);
Vue.component('leader-snapshot-item', LeaderSnapshotItem);
Vue.component('updates', Updates);
