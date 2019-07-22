<template>
  <Card
    :back-link-visible="true"
    :title="'Select company URLs'"
    :button-title="'Scrap data'"
    :button-disabled="isCandidatesEmpty"
    @submit="scrapCompanyData()"
  >
    <SelectionTabs />
    <section v-show="tabIndex === 0">
      <SelectionItem
        v-for="(url, index) of linkedinURLs"
        :key="index"
        :index="index"
        :source="'linkedin'"
        :url="url"
        @checked="onURLChecked($event)"
      />
    </section>
    <section v-show="tabIndex === 1">
      <SelectionItem
        v-for="(url, index) of societeURLs"
        :key="index"
        :index="index"
        :source="'societe'"
        :url="url"
        @checked="onURLChecked($event)"
      />
    </section>
  </Card>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { SELECT_COMPANY_URL } from '../store/mutations';
import { SCRAP_COMPANY_DATA } from '../store/actions';
import Card from '../components/Card.vue';
import SelectionTabs from '../components/selection/SelectionTabs.vue';
import SelectionItem from '../components/selection/SelectionItem.vue';

export default {
  name: 'CompanySelection',
  components: {
    Card,
    SelectionTabs,
    SelectionItem,
  },
  computed: {
    ...mapState(['tabIndex']),
    ...mapGetters(['linkedinURLs', 'societeURLs', 'isCandidatesEmpty']),
  },
  methods: {
    onURLChecked({ source, index }) {
      this.$store.commit(SELECT_COMPANY_URL, { source, index });
    },

    scrapCompanyData() {
      this.$store.dispatch(SCRAP_COMPANY_DATA);
    },
  },
};
</script>
