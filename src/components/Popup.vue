<template>
  <v-dialog width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">Add new Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
                <v-text-field :value="formattedDate" label="Due date" prepend-icon="date_range" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
        </v-menu>

        </v-form>
      </v-card-text>
      
      <v-divider></v-divider>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="success" text @click="submit">Add Project</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: '',
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
};
</script>
