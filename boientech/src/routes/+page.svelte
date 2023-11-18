<script>
    let ctaText = "Get Started";
    let backgroundImagePath = "your-background-image.jpg"; // Replace with the actual path to your image
</script>

<nav>
    <!-- You can add navigation links here -->
    <a href="/">Home</a>
    <a href="/blog">blog</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>

<div class="cta-container">
    <h1>Your Landing Page</h1>
    <p>Awesome description about your product or service.</p>
    <a href="#" class="cta-button">{ctaText}</a>
</div>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-image: url({backgroundImagePath});
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    nav {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        position: fixed;
        width: 100%;
        z-index: 1000;
    }

    nav a {
        color: #fff;
        text-decoration: none;
        margin: 0 15px;
        font-weight: bold;
    }

    .cta-container {
        text-align: center;
    }

    .cta-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
        background-color: #4caf50;
        color: #fff;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .cta-button:hover {
        background-color: #45a049;
    }
</style>
