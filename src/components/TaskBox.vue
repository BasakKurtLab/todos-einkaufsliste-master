<template>
    <div class="container">
       
        <div class="inputs">
        <input type="text" id="input" placeholder="Eintrag eingeben">
        
        <button @click="add">Hinzufügen</button>
        </div>
        <div><span id="info"></span></div>

        <div class="liste" >
            <ul>
                <li
                 :key="index"
                v-for="(item, index) in items"
                :class="{ active: show === index }"
                @mouseenter="show = index;"
                @mouseleave="show = false;" >

        {{ item }}

                        <transition name="fade">
                            <span v-if="show === index" @click="del(index)"> löschen </span>
                        </transition>
                </li>
                

            </ul>
        </div>
        

    </div>





</template>
<script>



  
export default {
    data(){
        return{
            items:[],
            show: false
                
        }

    },
    methods:{//Neu Liste saved  in Items Array
        add(){
            document.getElementById("info").innerHTML="";
            let input= document.getElementById("input");
            if(input.value!=""){
                this.items.push(input.value);
                input.value="";
            }
            else{
                document.getElementById("info").innerHTML="* Bitte Eintag eingeben";
            }
        },//Delete the item, where cursor on
        
         del: function (index) {
               
                this.items.splice(index, 1);




            },
        

    }
    
}
</script>

<style>
.container{
    
    height:480px;
    background-color: white;
    border-radius: 10px;
    margin-left:auto;
    margin-right: auto;
    padding:50px 80px;
    -webkit-box-shadow: 0px 0px 7px 0px rgba(11,5,76,0.43); 
    box-shadow: 0px 0px 7px 0px rgba(11,5,76,0.43);
    
}
.inputs{
    display: flex;
    justify-content: flex-start;
    
}
.inputs input,button{
    border-radius: 10px;
    outline:none;
    
    padding:15px 30px;
    font-size: 1.2em;
    

}
.inputs input{
    color:var(--primaryColor);
    border:1px solid  #b6b8bd;
    margin-right:30px;
    width:50%;
}

.inputs button{
    background-color:var(--secondaryColor);
    color:white;
    width:30%;
    border:none;
    cursor: pointer;

}
#info{
    font-size: 0.8em;
    text-align: left;
    padding-top: 5px;
    display: block;
}
.liste{
    border-top:1px solid rgb(219, 212, 212);
    margin-top:20px;
    text-align: left;
    font-size: 1.2em;
    height: 300px;
    color:rgb(31, 29, 29);
    overflow-y: scroll;
    

}
li{
    cursor: pointer;
    margin:8px 0;
    
}
span{
    color:red;
    margin-left:10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, 
.fade-leave-to  {
  opacity: 0;
}

</style>