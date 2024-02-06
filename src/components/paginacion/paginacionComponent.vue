<template>
    <div class="view">
        <p class="mt-3">Current page: {{ currentPage }}</p>
        <b-table
        hover
        class="w-100"
        id="table"
        :items="vehicles"
        :fields="fields"
        :per-page="perPage"
        :currentPage="currentPage"
        small
        ></b-table>
        <b-pagination
        v-model="currentPage"
        :total-rows="vehicles.length"
        :per-page="perPage"
        aria-controls="table"
        ></b-pagination>
    </div>
</template>
<script>
import vehicleService from '@/services/vehicleService';
export default {
    data() {
        return {
            vehicles: [],
            perPage: 10,
            currentPage: 1,
            sort: 'marca',
            fields: [
                {
                    key: 'marca',
                    sortable: true
                },
                {
                    key: 'modelo',
                    sortable: true
                },
                {
                    key: 'year',
                    sortable: true
                },
                {
                    key: 'numero_serie',
                    sortable: true
                }
            ]
        }
    },
    mounted() {
        this.getVehicles();
    },
    methods: {
        getVehicles() {
            const data = vehicleService.getVehicles();
            this.vehicles = data;
        },
    }
}
</script>
<style scoped>
.view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>