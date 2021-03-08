function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
  result = message
	if(message.length <= maxLength){
       message = message}
  	else{
      message = message.slice(maxLength, message.length) + '...'}
     
// Пиши код выше этой строки
  return result;

  console.log(result)
}
