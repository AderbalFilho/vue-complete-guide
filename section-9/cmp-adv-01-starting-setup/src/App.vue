<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></UserInfo>
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </CourseGoals>
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
