<template>
    <div class="main wrapper">
        
        <h1>To-Do Liste</h1>
        
        
        <TaskBox></TaskBox>
    </div>



</template>
<script>

import TaskBox from "../components/TaskBox.vue";
export default {
    data(){
        return
    },
    components:{
        TaskBox
    }
    
}
</script>
<style>
:root{
  --primaryColor:#0f1e37;
  --secondaryColor:#009ee3;
}
*{box-sizing: border-box;}

.main{
    background-color: rgb(226, 230, 236);
    height:90vh;
  
    
}
.main h1{
    
    text-align: left;
    color:var(--primaryColor);
    padding-bottom:10px ;
   
    
}
.main h1::after{
  content: "";
  display: block;
  border:2px solid var(--secondaryColor);
  margin-top: 8px;
  width:130px;
}

    


</style>
