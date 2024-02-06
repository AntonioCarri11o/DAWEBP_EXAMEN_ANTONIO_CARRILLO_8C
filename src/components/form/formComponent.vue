<template>
    <b-container>
        <div>
            <b-form
            @submit.prevent="checkForm"
            action="https://vuejs.org/"
            method="post"
            novalidate
            >
            <b-form-group
            id="marca-group"
            label="Marca"
            label-for="marca"
            :state="marca ? null : false"
          >
            <b-form-input
                v-model="marca"
                type="text"
                name="marca"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="modelo-group"
            label="Modelo"
            label-for="modelo"
            :state="modelo ? null : false"
          >
            <b-form-input
                v-model="modelo"
                type="text"
                name="modelo"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="year-group"
            label="Año"
            label-for="year"
            :state="year ? null : false"
          >
            <b-form-input
                v-model="year"
                type="number"
                name="year"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Numero de serie"
            label-for="ns"
            :state="numero_serie ? null : false"
          >
            <b-form-input
                v-model="numero_serie"
                type="text"
                name="ns"
                required
            ></b-form-input>
        </b-form-group>
        <b-button type="submit" style="background-color:#4935ff">Submit</b-button>
        <b-alert variant="danger" dismissible :show="errors.length > 0">
            <b>{{
              errors.length > 1
                ? "ATENCIÓN tienes los siguientes errores:"
                : "Cuidado tienes esl siguiente error:"
            }}</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </b-alert>
        </b-form>
        </div>
    </b-container>
</template>
<script>
import Vue from 'vue';
import vehicleService from '@/services/vehicleService';
export default Vue.extend({
    data () {
        return {
            marca: null,
            modelo: null,
            year: null,
            numero_serie: null,
            errors: [],
        }
    },
    methods: {
        checkForm: function() {
            this.errors = [];
            if (!this.marca) {
                this.errors.push("La marca es obligatoria");
            }
            if (!this.modelo) {
                this.errors.push("El modelo es obligatorio");
            }
            if (!this.year) {
                this.errors.push("El año es obligatorio");
            } else {
                const currentYear = new Date().getFullYear();
                if (this.year > currentYear){
                    this.errors.push("El año no puede ser mayor al actual");
                }
            }
            if (!this.numero_serie) {
                this.errors.push("El número de serie es obligatorio");
            } else {
                const format = /^[A-Z]{4}\d{3}-\d{2}[A-Z]{2}$/;
                if (!format.test(this.numero_serie)) {
                    this.errors.push("El número de serie debe tener un formato XXXX000-00XX");
                }
            }
            if (this.errors.length == 0) {
                const vehicle = {
                    marca: this.marca,
                    modelo: this.modelo,
                    year: this.year,
                    numero_serie: this.numero_serie
                }
                vehicleService.addVehicle(vehicle);
            }
        }
    }
})
</script>