body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #3498db;
    color: #fff;
    padding: 1em;
    text-align: center;
}

main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2em;
}

.course-card {
    width: 200px;
    padding: 1em;
    margin: 1em;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.course-card:hover {
    transform: scale(1.05);
}
