<?php include "../templates/header.php"; ?>

<div class="container">
    <div class="jumbotron">
        <h1>Create an account</h1>
        <br><br>
        <form class="form-horizontal" action="create_account.php" method="POST">
            <div class="form-group">
                <label for="inputEmail" class="col-sm-2">Email:</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail" name="email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword" class="col-sm-2">Password:</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" name="password">
                </div>
            </div>
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            <br><br>
        </form>
    </div>
</div>

<?php include "../templates/footer.php"; ?>