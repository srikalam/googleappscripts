function sendMeetingInvite() {
    var tomorrow = new Date(Date.now() + 1000*60*60*24)
    var emailAddress = "srikalam@gmail.com"; 
    
    var templ = HtmlService
            .createTemplateFromFile('zoom_invite');

    var formattedDate = Utilities.formatDate(tomorrow, "PST", "MM/dd");
    var subject = 'TGIF Meeting invite for ' + formattedDate;
    
    templ.meetingDate = formattedDate;
   var message = templ.evaluate().getContent();
  
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    htmlBody: message,
  });
}
