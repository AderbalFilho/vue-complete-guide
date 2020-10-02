<template>
  <div>
    <TheHeader />
  </div>
</template>

<script>
import BadgeList from './components/BadgeList';
import CourseGoals from './components/CourseGoals';
import TheHeader from './components/TheHeader';
import UserInfo from './components/UserInfo';

export default {
  components: {
    BadgeList,
    CourseGoals,
    TheHeader,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
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
