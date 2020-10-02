<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'"/>
    <ManageGoals v-if="selectedComponent === 'manage-goals'" /> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ActiveGoals from './components/ActiveGoals';
// import BadgeList from './components/BadgeList';
// import CourseGoals from './components/CourseGoals';
import ManageGoals from './components/ManageGoals';
import TheHeader from './components/layout/TheHeader';
// import UserInfo from './components/UserInfo';

export default {
  components: {
    ActiveGoals,
    // BadgeList,
    // CourseGoals,
    ManageGoals,
    TheHeader,
    // UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-goals',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
