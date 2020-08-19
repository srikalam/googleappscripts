function sendThankyouEmail(e) {
  var user = {name: e.namedValues['Name'][0], email: e.namedValues['Email'][0]};
  
  Logger.log(user.email + " " + user.name)
  
  var htmlBody = '<p style="font-family:georgia,garamond,serif;">Dear '+ user.name +', <br>Thank you for joining our meeting today.  We sincerely hope you enjoyed it. <br>'
    + '<br>We are proud to share a little bit more about our club.  We are celebrating our club\'s 50th year! Our members range from those just joining to those that have been a member for 45+ years!<br>'
    + 'We continue to be considered a distinguished club, among other Toastmaster clubs.  Most importantly, we are very supportive in helping each other grow as communicators and as people.<br>'
    + '<br> For more information, please check out our social media links.<br><a href="https://tgif.toastmastersclubs.org/"> TGIF Toastmasters Club </a>'
    + '<br> <a href="https://www.youtube.com/channel/UCsBLRFb4V1JXG8zlOhS5SLQ/videos">Youtube Channel</a> ' 
    + '<br> <a href="https://www.facebook.com/groups/TGIFtm/">Facebook</a><br><br>'
    + 'Additional Information about Pathways Program can be found here: https://www.toastmasters.org/pathways-overview<br><br>'+
    + 'But even better, please reachout to me and I can give you a good feel for what you can expect from our club.'
    + '<br>We hope to see you at the next meeting Friday at 7:00 a.m. Here is the zoom link:<br>https://us02web.zoom.us/j/970938090?pwd=cUhJckFudGwrVVhrNkNuTDJHWEpBZz09<br><br>'
    + 'Sincerely,<br>Ben Dupre<br>VP of Public Relations<br></p>';
  

  
  MailApp.sendEmail({
    to: user.email,
    from:"Ben Dupre<vppr.tgif@gmail.com",
    subject: "Thank you for attending TGIF Toastmasters",
    htmlBody: htmlBody,
    replyTo: "vppr.tgif@gmail.com",
    cc: "Ben Dupre<vppr.tgif@gmail.com>,Owen Baylis <vpm.tgif@gmail.com>",
    bcc: "Arthy Sundaram <arthysundaram@gmail.com>,srikalam@gmail.com"
  });
  
  
  var responseText = '';
  for ( var i in e.namedValues) {
    responseText +=  '  '+ i + ":  <b>" + e.namedValues[i] + '</b><br>';
  }
  var responsesBody = '<p style="font-family:georgia,garamond,serif;"> Guest: '+ user.name  +' responses from the Guest Sign-In form: <br>'
  +  '<br>' + responseText +'</p> <br> ps: This emaill is auto generated<br>';
 
  
  MailApp.sendEmail({
    to: "Arthy Sundaram <arthysundaram@gmail.com>,srikalam@gmail.com,Ben Dupre<vppr.tgif@gmail.com>,Owen Baylis <vpm.tgif@gmail.com> ",
    subject: "Guest Feedback from "+user.name,
    htmlBody: responsesBody,
    noReply: true
  });
}
