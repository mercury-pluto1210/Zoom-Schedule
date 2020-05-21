<template>
<v-layout
  column
  justify-center
  align-center>

    <div class="Zoom-Schedule">
      <h1>Zoom Schedule</h1>
      <div class="Schedule">
        <table>
          <colgroup></colgroup>
          <colgroup span="5" class="week"></colgroup>
          <tr>
            <th class="jigen" v-for="(list, index) in lists" v-bind:key="index">
              {{ list.weeks }}
            </th>
          </tr>
          <tr>
            <th class="jigen">1th (9:20 ~ 11:00)</th>
            <td><Input /></td> <td><Input2 /></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <th class="jigen">2nd (11:10 ~ 12:50)</th>
            <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <th class="jigen">3rd (13:40 ~ 15:20)</th>
            <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <th class="jigen">4th (15:30 ~ 17:10)</th> <td></td> <td></td>
            <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
        </table>
      </div>
  </div>

  </v-layout>
</template>

<script>
import Input from '~/components/Input.vue'
import Input2 from '~/components/Input2.vue'

export default {
  components: {
    Input,
    Input2
  },
  data (){
    return {
      lists: [
      { id: 1, weeks: ''},
      { id: 2, weeks: 'Monday' },
      { id: 3, weeks: 'Tuesday' },
      { id: 4, weeks: 'Wednesday' },
      { id: 5, weeks: 'Thursday' },
      { id: 6, weeks: 'Friday' }
      ],
    }
  }
}
</script>

<style>
.week{
  display: none;
}
</style>
