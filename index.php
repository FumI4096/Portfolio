<?php include 'form.php' ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mimon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!--Navigation-->
    
    <!--To seperate only :ooo-->
    <header id="home">
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
            <div class="title">
                <h2><span>M</span>imon</h2>
            </div>

        </nav>
        <!--Consist of Mimon's Picture, Name, Quote, and Social Medias-->
        <div id="picture">
            <img src="" alt="">
            insert picture*
        </div>
        <div id="information">
            <h1>Seimon Elias S. Maiquez</h1>
            <h2>Full Stack Developer</h2>
            <h3>"A man does not bring himself to reality, he retaliates with it."</h3>
            <ul>
                <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li> <!--Facebook-->
                <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li> <!--LinkedIN--> 
                <li><a href=""><ion-icon name="logo-github"></ion-icon></a></li>  <!--Github-->
                <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li> <!--Twitter?-->
            </ul>
        </div>
    </header>

    <hr>

    <main>
        <!--ABOUT SECTION-->

        <section id="about-me">
            <!--About Me-->
            <h1>About</h1>
            <p>Hello, my name is Seimon Elias S. Maiquez. Currently a college student and a future full stack  freelancer and developer. Hobbies like listening to music, playing games, watching anime, and studying related to tech are what keep me entertained.
            </p>
            <p>My whole career started from my uncle as he is the one who introduced me to the world of programming. I turned as determine as becoming a web developer someday.</p>
        </section>
        <hr>
        <section id="resume">
            <h1>Resume</h1>
            <ul>
                <li>
                    <p>Education</p>
                    <ul>
                        <li>Bachelor of Science in Information Technology</li>
                        <ul>
                            <li>Colegio de San Juan de Letran Calamba</li>
                            <li>2023 - 2026</li>
                        </ul>
                        <li>Master of Science in Information Technology</li>
                        <ul>
                            <li>University of the Philippines</li>
                            <li>2027 - 2029</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <p>Experience</p>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li>
                    <p>Certificate</p>
                    <ul>
                        <li>Microsoft Excel Specialist &#40;2022 - 2024&#41;</li>
                        <li>Information Technology Specialist in Database &#40;2023&#41;</li>
                    </ul>
                </li>
            </ul>
        </section>

        <hr>

        <section id="services">
            <h1>Services</h1>
            <dl>
                <dt>Database</dt>
                <dd>&#45;</dd>
                <dt>Networking</dt>
                <dd>&#45;</dd>
                <dt>Web Development</dt>
                <dd>&#45;</dd>
                <dt>Mobile Development</dt>
                <dd>&#45;</dd>
            </dl>
        </section>

        <hr>

        <section id="projects">
            <h1>Projects</h1>
            <div class="projects" id="project1">
                Some Picture
                <h2>Project Title</h2>
                <p>Statement Here</p>
            </div>
            <div class="projects" id="project2">
                Some Picture
                <h2>Project Title</h2>
                <p>Statement Here</p>
            </div>
            <div class="projects" id="project3">
                Some Picture
                <h2>Project Title</h2>
                <p>Statement Here</p>
            </div>
            <div class="projects" id="project4">
                Some Picture
                <h2>Project Title</h2>
                <p>Statement Here</p>                
            </div>
        </section>

        <hr>

        <section class="contacts" id="contact">
            <h1>Get in Touch</h1>
            <form action="" method="POST">
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title">
                </div>
                <div>
                    <label for="fname">First Name:</    label>                
                    <input type="text" name="fname" id="fname">
                    <label for="lname">Last Name:</label>
                    <input type="text" name="lname" id="lane">
                </div>
                <div>
                    <label for="email">Email:</label>                
                    <input type="text" name="email" id="email">
                </div>
                <div>
                    <textarea name="texts" id="texts" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <input type="submit" name="submit" id="submit" value="Submit">
                </div>

            </form>
        </section>
        
    </main>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>