<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
//    if($_GET['q'] == 'Search...'){
//        header('Location: index.php');
//    }
    $search = $_GET['q'];
    if($_GET['q'] !== ''){
        //connects to server and database
        $con = mysqli_connect('localhost', 'root', '', 'tt_companies');

        //checks to see if connection was completed
        if (mysqli_connect_errno()){
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            //you need to exit the script, if there is an error
            exit();
    }    
?>
<html class="no-js">

<head>
    <script src="https://use.fontawesome.com/55529beb09.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Thompson Thrift Data Architecture</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css" />



</head>

<body>
    
    <!--Header-->

    <div id="PageHeader">
        <div>
            <img src="logos/stacked transparent.png" id="TTLogo">
            <button class="button" id="AddProjectButton" onclick="myFunction()"><a href="addProjectPage.html"></a>Add Project</button>
            <h1>Thompson Thrift Project Index</h1>
            <h2>Search Below for Your Project</h2>
        </div>
    </div>

    <!--List of Projects-->

    <div class="row">
        <div class="medium-12 column">

            <!--Search Box-->
            <form action="index(PHP).php" method="GET" id="searchForm">
                <input type="text" name="q" id="searchBox" onkeyup="myFunction()" placeholder="Search for Project..">
<!--                <input type="submit" name="q" value="Search">-->
            </form>
            <?php
            if(!isset($search)){
                echo '';
            } else {
                $query = mysqli_query($con, "SELECT * FROM projects_sample WHERE name LIKE '%$search%' OR description LIKE '%$search%' OR city LIKE '%$search%' OR start_date LIKE '%$search%'");
                $num_rows = mysqli_num_rows($query);
            ?>
            <p><strong><?php echo $num_rows; ?></strong> results for '<?php echo $search; ?>'</p>
            <?php 
                while($row = mysqli_fetch_array($query)){
                    $id = $row['ID'];
                    $title = $row['Name'];
                    $description = $row['Description'];
                    $city = $row['City'];
                    $start_date = $row['Start_Date'];
                    
                    echo '<h3>ID: ' . $id . '</h3><p>Title: ' . $title . '</p><p>Description: ' . $description . '</p><p>City: ' . $city . '</p><p>Start Date: ' . $start_date . '</p><br />';
                }
            }
            ?>
        </div>
    </div>

    <script src="index.js"></script>

</body>

</html>
<?php
    }
?>
