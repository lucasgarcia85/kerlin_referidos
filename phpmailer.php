<?php

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$name2 = $_POST['name2'];
$telephone2 = $_POST['telephone2']
$subject = 'Mensaje recibido desde www.referidoskerlin.com.ar';

$recaptcha_secret = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; //Add secret key
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
$response = json_decode($response, true);

if( empty(trim($name)) ) $name = 'anonimo';

$body = <<<HTML
    <h1>Mensaje recibido desde www.referidoskerlin.com.ar</h1>
    <H2>DATOS DE LA PERSONA QUE REFIERE:</H2>
    <p> $name | $email | $telephone</p>
    <h2>DATOS DEL REFERIDO INTERESADO EN ALGÚN SERVICIO:</h2>
    <p> $name2 | $telephone2</p>
    
HTML;

$mailer = new PHPMailer(true);

try {
    //Server setting
    $mailer->SMTPDebug = 0;
    $mailer->isSMTP();
    $mailer->Host = 'c1561910.ferozo.com';
    $mailer->SMTPAuth = true;  
    $mailer->Username = 'no-reply@c1561910.ferozo.com';
    $mailer->Password = 'wpFD@hW1SB';                          
    $mailer->SMTPSecure = 'ssl';
    $mailer->Port = 465;
    //$mailer->AltBody = strip_tags($body);
    //$mailer->CharSet = 'UTF-8';

    //Recipients
    $mailer->setFrom( $email, "$name" );
    $mailer->addAddress('no-reply@c1561910.ferozo.com','Sitio web');

    //Content
    $mailer->isHTML(true);
    //$mailer->msgHTML($body);
    $mailer->Subject = $subject;
    $mailer->msgHTML($body);
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    if($response["success"] === true){
        $mailer->send();
        header("Location: thank-you.html" );
    } else {
        header("Location: 404.html" );
    }

} catch (Exception $e) {
    return "El mensaje no pudo ser enviado. Error: $mailer->ErrorInfo";
}

?>