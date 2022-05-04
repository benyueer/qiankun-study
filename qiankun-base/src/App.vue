<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/vue">vue app</el-menu-item>
      <el-menu-item index="/react">react app</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

