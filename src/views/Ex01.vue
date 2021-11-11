<template>
  <div>
    <h1>野球チーム一覧</h1>
    <p v-for="team of getTeams" v-bind:key="team.id">
      <router-link :to="/teamDetail/ + team.id"> {{ team.name }}</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Team } from "./types/baseballteam";

@Component
export default class Ex01 extends Vue {
  /**
   * stateからteamsの配列を受け取る
   */
  get getTeams(): Array<Team> {
    return this["$store"].state.teams;
  }
}
</script>

<style scoped>
div{
  text-align: left;
}
</style>
