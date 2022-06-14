<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create"><a class="button primary new"><font-awesome-icon icon="fa-solid fa-plus" />&nbsp;New Post</a></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.button {
  font-family:'Open Sans';
  font-size: 16px;
  font-weight:400;
  display:inline-block;
  color:#FFF;
  border-radius: .25em;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.4);
}

.primary {
  line-height:35px;
  transition:ease-in-out .2s;
  padding: 0 10px;
}

.primary:hover, .condensed:hover, .touch:hover {
  transform:scale(1.02);
  box-shadow:2px 2px 5px rgba(0,0,0,0.20), inset 0 0 0 99999px rgba(0,0,0,0.2);
}

.new {
  background:rgb(46, 204, 113);
}

.touch {
  transition:ease-in-out .2s;
  line-height:40px;
  width:40px;
  padding: 0px;
  text-align: center;
}

.edit {
  background: rgb(52, 152, 219);
}
  
  .delete {
    background: rgb(192, 57, 43);
    }
</style>
