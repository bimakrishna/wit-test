
<template>
  <div>
    <div>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">{{person.id}}</th>
            <td>{{person.name}}</td>
            <td>{{person.alamat}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  props: ['person']
}
</script>
