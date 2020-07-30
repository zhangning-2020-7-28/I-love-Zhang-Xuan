function Todolist (){
    this.ul=document.getElementsByTagName("ul")[0];
    this.li=document.getElementsByTagName("li");
}
//总任务数
Todolist.prototype.total = function(){
    document.getElementById("total").innerHTML=this.li.length;
}
Todolist.prototype.unfinish=function(){
    var items = document.getElementsByClassName("active");
    document.getElementById("unfinish").innerHTML=this.li.length-items.length;
}
//改变字体
Todolist.prototype.change= function(){
    var that = this;
   for(let i=0;i<this.li.length;i++){  
       this.li[i].firstElementChild.onclick=function(){
         if (this.checked) {
             this.parentElement.className = "active";
             that.unfinish();
         }else{
             this.parentElement.className = "";
         }    
       }
       
   }  
}
//删除
Todolist.prototype.dofinish=function(){
   var that = this;
   document.getElementById("dofinish").onclick=function(){
     for(let i=0;i<that.li.length;i++){  
      if (that.li[i].firstElementChild.checked) {
          that.ul.removeChild(that.li[i]);
          i--;
      that.total();
      that.unfinish();
      }
   }   
   }
}
//添加
Todolist.prototype.add = function(){
    var that = this;
document.getElementById("add").onclick=function(){
    var newTask = document.getElementById("newTask");
    var newLi = document.createElement("li");
    newLi.innerHTML = "<input type='checkbox'> "+newTask.value;
    that.ul.appendChild(newLi);
    newTask.value="";
    that.change();
    that.dofinish();
    that.total();
    that.unfinish();
}
}

Todolist.prototype.init = function(){
   this.change();
   this.add();
   this.dofinish();
   this.total();
   this.unfinish();
}