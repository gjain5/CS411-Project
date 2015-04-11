<?php
session_start(); //Resume session
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ClassMaster</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

    <link rel="stylesheet" href="style.css">

    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Combine brand with collapse button for small screens -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">ClassMaster</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
<?php
$email = $_SESSION["email"];
if ($email): ?>
<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"
        role="button" aria-expanded="false">
    <a href="#">$email <span class="caret"></span></a>
</li>
<ul class="dropdown-menu" role="menu">
    <li><a href="settings.php">Settings</a></li>
    <li class="divider"></li>
    <li><a href="logout.php">Logout</a></li>
</ul>
<?php else: ?>
<li><a href="login.php">Login</a></li>
<?php endif; ?>
            </ul>

            <!-- Collect nav items on small screens -->
            <!--
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav navbar-left">
                    <li><a href="#">Test</a></li>
                </ul>
            </div>
            -->
        </div>
    </nav>