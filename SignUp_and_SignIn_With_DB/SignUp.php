<?php
    session_start();

    include("db.php");

    if($_SERVER['REQUEST_METHOD'] == "POST")
    {
       $firstname=$_POST['fname'];
       $lastname=$_POST['lname'];
       $Gender=$_POST['gender'];
       $address=$_POST['address'];
       $email=$_POST['email'];
       $password=$_POST['password'];


       if(!empty($email) && !empty($password) && !is_numeric($email))
       {
            $query="insert into form (fname,lname,gender,address,email,password) values('$firstname','$lastname','$Gender','$address','$email','$password')";

            mysqli_query($con,$query);

            echo "<script type='text/javascript'> alert('Successfully Register')</script>";

       }
       else{
        echo"<script type='text/javascript'> alert('Please Enter some valid infomation')</script>";

       }
    }
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="SignUp">
    <h1>Sign Up</h1>
    <h4>Its free and only takes a minute</h4>
    <form action="" method="POST">
        <label>First Name</label>
        <input type="text" name="fname" required>
        <label>Last Name</label>
        <input type="text" name="lname" required>
        <label>Gender</label>
        <input type="text" name="gender" required>
        <label>Address</label>
        <input type="text" name="address" required>
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Password</label>
        <input type="password" name="password" required>
        <input type="submit" name="" value="submit">
    </form>
    <p>Clicking the Sign up button, you agree to our <br><a href="">Terms and Conditions</a> and <a href="">Policy Privacy</a></p>
    <p>Already have an account? <a href="./LoginIn.php">Login Here</a></p>    
</div>
</body>
</html>