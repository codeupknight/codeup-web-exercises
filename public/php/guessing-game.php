<?php 
session_start();
if (isset($_POST['reset'])) {
    if ($_POST['reset'] == 'reset') {
        session_unset();
        session_destroy();
    }
}

$_SESSION['win'] = false;

//reset button
//set hidden if first visit
// and success if correct, alert if incorrect
function hideDefault() {
    if ($_GET) {
        echo "hidden";
    }
}
function status (&$guessCounter) {
    if ($guessCounter == 0) {
        echo "hidden";
    }
    if ($_SESSION['win']) {
        echo "success";
        // $guessCounter = 0;
    } else {
        echo " alert-info";
    }
}
//checks for user input, then applies it to variables
function checkInput() {
    if (isset($_GET['min']) && isset($_GET['max'])) {
        $inputA = $_GET['min'];
        $inputB = $_GET['max'];
    } else {
        echo "hidden";
    }
}

//set min and max based on user input
//error and reset value if invalid
function setMinMax(&$min, &$max) {
    if (is_int($min) && is_int($max)) {
            if ($min > $max) {
                $inputA = $min;
                $inputB = $max;
                $min = $inputB;
                $max = $inputA;
            }
        return "Generating a number between " . $min . " and " . $max . ":";
    } else {
        return "Input not recognized as whole numbers. <br> Number generated between 1 and 100.";
    } 
}

function showResult($guess, $random, &$counter, $min, $max) {
    if ($guess < $min) {
        return "You guessed lower than the minimum number! Try again!";
    } else if ($guess > $max) {
        return "You guessed higher than the maximum number! Try again!";
    } else if ($guess == $random) {
        $_SESSION['win'] = true;
        session_unset();
        session_destroy();
        return "Success! You guessed the right number in " . $counter . " tries!";
    } else if ($guess < $random) {
        $_SESSION['win'] = false;
        $counter++;
        return "Too low! try again!";
    } else if ($guess > $random) {
            $_SESSION['win'] = false;
            $counter++;
            return "Too high, try again!";
    }
}

if (isset($_POST['guessCounter'])) {
    $guessCounter = $_POST['guessCounter'];
    $guess = $_POST['guess'];
    $guessCounter++;
} else {
    $guessCounter = 0;
}

//set random number
if (isset($_SESSION['random'])) {
    $random = $_SESSION['random'];
} else {
    $min = 1;
    $max = 100;
    $_SESSION['random'] = rand($min, $max);
    $random = $_SESSION['random'];
}

if (isset($_SESSION['counter'])) {
    $counter = $_SESSION['counter'];
    $counter++;
} else {
    $counter = 0;
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
            integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
            crossorigin="anonymous"
        >
        <title>High-Low game</title>
    </head>
    <body>
        <div class="container">
            <header class="page-header">
                <h1>High-Low Game</h1>
            </header>
            <p class="<?php hideDefault() ?>"> Guess a number between 1 and 100!
            </p>
            <p><h3 class="<?php checkInput() ?>">
                <?php echo setMinMax($min, $max) ?></h3>
            </p>
            <p><h6><a href="#" id="showForm" class="<?php hideDefault() ?>">Use Custom Minimum/Maximum Values?</a>
            <form id="customInput" hidden>
                <input type="text" name="min" placeholder="Min">
                <input type="text" name="max" placeholder="Max">
                <input type="submit" value="Submit">
            </form>

            <div class="alert <?php status($guessCounter) ?>" role="alert"> 
                <?php echo showResult($guess, $random, $counter, $min, $max) ?>
            </div>
            <form method="post">
                <div class="form-group">
                    <label for="guess">Guess</label>
                    <input
                        type="number"
                        class="form-control"
                        name="guess"
                        id="guess">
                </div>
                <button type="submit" name="guessCounter" value="<?php echo $guessCounter ?>" class="btn btn-primary">
                    Guess!!
                </button>
                <button type="submit" name="reset" value="reset" class="btn btn-secondary">
                    Reset
                </button>
            </form>
            </p>
        </div>

        <?php var_dump($_SESSION); ?>

        <script
            src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
            crossorigin="anonymous"
        ></script>
        <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
            integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
            crossorigin="anonymous"
        ></script>
        <script>
        // listen for click, show form if clicked   
        (function() {
            $('#showForm').click(function (event) {
                event.preventDefault();
                $('#customInput').toggle();
            }); 
            $('#reset').click(function (event) {
                $('#reset').attr("data-value", "1");
            });
        })();
        </script>
    </body>
</html>