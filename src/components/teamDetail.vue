<template>
  <div>
    <b>球団名</b>
    <p>{{ currentTeam.name }}</p>
    <b>本拠地</b>
    <p>{{ currentTeam.home }}</p>
    <b>発足日</b>
    <p>{{ currentTeam.formatInaugurationDate }}</p>
    <b>歴史</b>
    <pre>{{ currentTeam.history }}</pre>
    <router-link to="/Ex01"><button type="button">戻る</button></router-link>
  </div>
</template>

<script lang="ts">
import { Team } from "@/views/types/baseballteam";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Giants extends Vue {
  // 対象のTeamオブジェクト
  private currentTeam!: Team;
  /**
   * VuexストアのGetter経由で受け取ったリクエストパラメータのIDから１件のチームを取得する.
   */
  created(): void {
    const teamId = parseInt(this["$route"].params.id);
    this.currentTeam = this["$store"].getters.getTeamId(teamId);
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
