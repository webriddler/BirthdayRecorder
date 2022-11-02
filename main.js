// localStorage.removeItem("birthdaysData");
  
  document.getElementById('displayEmoji').innerHTML = "⚠️ ⚠️ ⚠️";
  document.getElementById('birthday_guy').innerHTML = "Why your collection is empty!";
  
let data = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep','Oct','Nov','Dec'];
  const birthdays = JSON.parse(localStorage.getItem("birthdaysData"));
  
  if(birthdays){
    data = birthdays;
  }
  function addData(){
  var name = document.forms['birthdayForm'].elements['guyname'].value;
  var bthDate = document.forms['birthdayForm'].elements['guyBirthday'].value;
  var emoji = document.forms['birthdayForm'].elements['emojiData'].value;
  data.push({name: name,date: bthDate,emoji: emoji});
  localStorage.setItem("birthdaysData",JSON.stringify(data));
  location.reload();
  }

  // var date = new Date('2002-02-20')
  if(birthdays){
  birthdays.sort((a, b) => {
    const ad = new Date(a.date).getTime();
    const bd = new Date(b.date).getTime();
    return ad - bd;
  });

  
  for(i=0; i<birthdays.length;i++)
  {
    var today = new Date;
    var date = new Date(birthdays[i]['date']);
    if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth()){
      document.getElementById('displayEmoji').innerHTML = "🎂 🎂 🎂";
      document.getElementById('birthday_guy').innerHTML = "Happy Birthday! "+birthdays[i]['name'];
      break;
    }
    else if ((date.getMonth() == today.getMonth()) && (date.getDate() > today.getDate())) {
      document.getElementById('displayEmoji').innerHTML = "💫 💫 💫";
      document.getElementById('birthday_guy').innerHTML = date.getDate() - today.getDate()+ " days remain for " + birthdays[i]['name'] + "'s Birthday";
      break;
    }
    else{
      document.getElementById('displayEmoji').innerHTML = "🚝 🚝 🚝";
      document.getElementById('birthday_guy').innerHTML = "Excitings days, on the way...";
    }
  }



  for(i=0; i<birthdays.length;i++)
  {
    var today = new Date;
    var date = new Date(birthdays[i]['date']);
    if (date.getMonth() >= today.getMonth()) {

    if (date.getDate() == today.getDate() && date.getMonth() == today.getMonth()){
      document.getElementById('displayEmoji').innerHTML = "🎂 🎂 🎂";
      document.getElementById('birthdays').innerHTML += "<span class='badge rounded-pill' style='border-color:red;' onclick='deleteBth("+i+");' > 🎂 "+birthdays[i]['name']+" | "+date.getDate()+" "+months[date.getMonth()]+"</span>";
    }
    else if((date.getMonth() == today.getMonth()) && (date.getDate() < today.getDate()))
    {
      document.getElementById('birthdays').innerHTML += "<span class='badge rounded-pill' style='border-color:grey;color:grey'  onclick='deleteBth("+i+");' >"+birthdays[i]['emoji']+" "+birthdays[i]['name']+" | "+date.getDate()+" "+months[date.getMonth()]+"</span>";
    }
    else{
      document.getElementById('birthdays').innerHTML += "<span class='badge rounded-pill' onclick='deleteBth("+i+");' >"+birthdays[i]['emoji']+" "+birthdays[i]['name']+" | "+date.getDate()+" "+months[date.getMonth()]+"</span>";
    }

     } 
  }

  for(i=0; i<birthdays.length;i++)
  {
    var today = new Date;
    var date = new Date(birthdays[i]['date']);

  if (date.getMonth() < today.getMonth()) {
      document.getElementById('birthdays').innerHTML += "<span class='badge rounded-pill' style='border-color:grey;color:grey' onclick='deleteBth("+i+");' >"+birthdays[i]['emoji']+" "+birthdays[i]['name']+" | "+date.getDate()+" "+months[date.getMonth()]+"</span>"
    }
  }
}
  function addBirthday() {
    document.getElementById('BirthdayDisplay').style = "display:none";
    document.getElementById('addBirthdayPage').style = "display:block";
  }
  function showBirthday(){
    document.getElementById('BirthdayDisplay').style = "display:block";
    document.getElementById('addBirthdayPage').style = "display:none";
  }
function deleteBth(i){
  var statement = "Do you want to delete "+birthdays[i]['name']+" birthday!";
  var c = confirm(statement);
  if(c){
    data.splice(i, 1);
    localStorage.setItem("birthdaysData",JSON.stringify(data)); 
    location.reload(); 
  }
  

}

  console.log(birthdays);