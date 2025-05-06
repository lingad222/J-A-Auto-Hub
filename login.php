<!-- index.php -->
<!DOCTYPE html>
<html>
<head><title>Login</title></head>
<body>
    <h2>Login to Your Account</h2>
    <form method="POST">
        <input type="text" name="username" placeholder="Username or Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        if ($user === 'admin' && $pass === '123456') {
            echo "<p>Login successful!</p>";
        } else {
            echo "<p>Invalid credentials.</p>";
        }
    }
    ?>
</body>
</html>

