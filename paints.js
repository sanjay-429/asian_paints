let node=document.getElementById("container");
for(let i=1;i<=9;i++){
    let element=document.createElement("div");
        element.setAttribute("id",i);
        element.setAttribute("class", "grid");
        element.innerHTML=i;
        node.appendChild(element);
}
function Insertcolour(){
    if( document.getElementById("block_id").value!="")
    document.querySelectorAll(".grid").forEach(block=>(block.style.backgroundColor="transparent"));
    let clrName=document.getElementById("color_id").value;
    let blkid=document.getElementById("block_id").value;
    if(clrName!="" && blkid!="" ){
        let cellid=document.getElementById(blkid);
            
             cellid.style.backgroundColor=clrName;

          document.getElementById("block_id").value="";
         document.getElementById("color_id").value="";
         count++;
       
         //cellid.innerHTML="";
        
    }
    else {
        return ;
   
       }    

}
function resertclr(){
    document.querySelectorAll(".grid").forEach(block=>(block.style.backgroundColor="transparent"));
    document.getElementById("block_id").value="";
    document.getElementById("color_id").value="";
     
}