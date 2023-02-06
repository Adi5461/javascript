<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input id="myInput" type="text">
    <button (onclick)="getKey()">Get Key</button>
    <p id="generatedkey"></p>
</body>
<script>
  function getKey(){
      let string = document.getElementById("myInput").value;
      let generatedkeySpan = document.getElementById("generatedkey");
      string = string.toLowerCase();
      let strArr = string.split(" ");
      strArr.map((item,index)=>{
      if(index != 0)
          strArr[index] = strArr[index].replace(item[0],item[0].toUpperCase());
      })
      console.log(strArr.join(""))
      generatedkeySpan.innerText = strArr.join("");
     
  }
</script>
</html>
