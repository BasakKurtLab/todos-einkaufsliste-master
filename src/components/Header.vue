<template>
    <div>
    <header class="wrapper">
        <div>
            <h1>Meine WebSeite</h1>
        </div>
        <div id="nav">
            <router-link to="/">To-Do's</router-link> 
            <router-link to="/einkaufsliste">Einkaufsliste</router-link>
        </div>
    </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
header{
  background-color: var(--primaryColor);
  color:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper{
  
  padding:10px 100px;
}
#nav {
  padding: 30px 0;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding:5px 0;
}

#nav a:first-child{
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  border-bottom: 1px solid  var(--secondaryColor);
}
</style>