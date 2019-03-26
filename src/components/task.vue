<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addTask">
        <input type="text" placeholder="Enter your Todays task.." v-model="task" v-validate="'min:5'" name="task">
        <transition name="alert-in">
        <p class="alert" v-if="errors.has('task')">{{ errors.first('task') }}</p>
      </transition>
      </form>
   <ul>
     <transition-group name="list" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
          <li v-for="(data, index) in tasks" :key='index'>
            {{ data.task }}
            <i class="fa fa-check" v-on:click="remove(index)">complete</i>
          </li>
        </transition-group>
   </ul>
   <transition name="alert-in">
   <p class="success" v-if="tasks.length<1">Hurrreeeyy!! All Task completed...!!! </p>
    </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tasks',
  data(){
    return{
    task:'',
      tasks:[
        {"task": "Work in Assignment"},
        {"task": "Group study"},
      
        
      ],
    }
  },
  methods:{
    addTask(){
     this.$validator.validateAll().then((result)=>
        {
          if(result){
          this.tasks.push({task: this.task})
          this.task='';  

        }else{
          console.log('not valid');
        }
      })    
    },
    remove(id){
      this.tasks.splice(id,1);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped> 
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
.alert
{
  background-color:#4a69bd;
  color: #E0EDF4;
  font-weight: bold;
  display: inline-block;
  padding: 2px;
  margin-top: 0px;
    
}
.success
{
  background-color:#2ecc71;
  color: #fff;
  margin-top: -5px;
  font-weight: bold;
}
.holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);

    }
  }
i
{
  float: right;
  cursor: pointer;
}
</style>
