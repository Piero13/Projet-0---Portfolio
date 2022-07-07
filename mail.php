<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoi message par formulaire de contact</title>
</head>

<body>
    <?php

    if(isset($_POST["message"])) {
        $message = "Cemessgae est envoyé depuis le formulaire de contact du site PFC13
        Nom : " . $_POST["lastname"] . "
        Prenom : " . $_POST["firstname"] . "
        Email : " . $_POST["email"] . "
        Phone number : " . $_POST["phone"] . "
        Message : " . $_POST["message"];

        $retour = mail("lemonpiero@gmail.com", $_POST["subject"], $message, "From: contact@monsite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);

        if($retour) {
            echo "<p>L'email a bien été envoyé</p>"
        }
    }

    ?>
</body>
</html>
    