<template>
  <div >
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Dynamic Form</span>
    </nav>
    <div class="container">
      <div class="form-test">
        <form class="form-data" @submit.prevent="addPerson">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="addPersonPayload.name" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label for="alamat">Alamat</label>
            <textarea v-model="addPersonPayload.alamat" class="form-control" placeholder="Enter your address" />
          </div>
          <button type="submit" class="btn btn-primary">save</button>
        </form>
        <p class="uk-text-success uk-margin-remove" v-if="addSuccessMessage">Successfully submit person</p>
      </div>
      <div class="data-person overflow-auto">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th class = "col-address" scope="col">Address</th>
          </tr>
        </thead>
        </table>
        <PersonList
          v-for="person in persons"
          :key="person.id"
          :person="person"
          />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PersonList from '../components/PersonList'
export default {
  name: 'Home',
  data () {
    return {
      addSuccessMessage: false,
      addPersonPayload: {
        name: '',
        alamat: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    addPerson () {
      this.$store.dispatch('addPerson', this.addPersonPayload)
        .then(() => {
          this.addSuccessMessage = true
          this.$store.dispatch('getPersons')
          this.$router.push('/')
          this.addPersonPayload.name = ''
          this.addPersonPayload.alamat = ''
        })
        .catch(err => {
          this.errorMessage = err.response.data.message
        })
    }
  },
  created () {
    this.$store.dispatch('getPersons')
  },
  computed: {
    persons () {
      return this.$store.state.persons
    }
  },
  components: {
    PersonList
  }
}
</script>

<style>
  .col-address {
    margin-left: 20px;
  }
  .container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    height: 800px;
    padding: 20px;
  }
  .form-test {
    background-color: white;
    padding: 20px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.849);
    background:rgba(255,255,255,.2);
  }
  .data-person {
    background-color:  #c8d6e5;
    width: 40%;
    padding: 30px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    box-shadow: 0px 5px 15px rgba(0,0,0, .5);
    background:rgba(255,255,255,.2);
  }
  .navbar {
    justify-content: center;
  }

  .btn {
    margin-top: 10px;
  }

</style>
