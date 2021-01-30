<template>
  <v-dialog width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">Add new Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="formattedDate"
                label="Due date"
                prepend-icon="date_range"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="success" text @click="submit" :loading="loading"
          >Add Project</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment';
import db from '@/fb';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [(v) => v.length >= 3 || 'Minimum length is 3 characters'],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format('Do MMMM YYYY'),
          person: 'The Net Ninja', // get the current logged in user
          status: 'ongoing',
        };

        db.collection('projects')
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format('Do MMMM YYYY') : '';
    },
  },
};
</script>
