<?
  $MailToAddress = "skyrmium@gmail.com";
  $MailSubject = "Formulario de contacto";
  $MailFromAddress = htmlspecialchars(stripslashes($_POST['email']));
  $Header = "CONTACTO\n";
  $name = htmlspecialchars(stripslashes($_POST['name']));
  $email = htmlspecialchars(stripslashes($_POST['email']));
  $subject = htmlspecialchars(stripslashes($_POST['subject']));
  $message = htmlspecialchars(stripslashes($_POST['message']));
  $MailSubject .= $subject;
  $Message .= "Nombre: ".$name."\n";
  $Message .= "Email: ". $email."\n";
  $Message .= "Asunto: ". $subject."\n";
  $Message .= "Mensaje: \n". $message."\n";
  $Message = $Header."\n\n".$Message."\n\n";
  mail( "$MailToAddress", "$MailSubject", "$Message", "From: $MailFromAddress");
  header ("Location: http://algo.com/");
?>