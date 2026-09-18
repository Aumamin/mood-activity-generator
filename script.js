function generateActivity() {

    const mood = document.getElementById("mood").value;

    const result = document.getElementById("result");

    if (mood === "") {
        result.textContent = "Please select a mood first.";
        return;
    }

    const activities = {
        happy: "Try something creative, call a friend, or spend some time outside."'
        stressed: "Take a short walk, practice deep breathing, or listen to calming music.",
        tired: "Take a short break, drink some water, or do some gentle stretching.",
        bored: "Try learning something new, read a book, or start a small creative project.",
        energetic: "Go for a run, work out, dance, yoga, or try a new physical activity.",
        relaxed: "Read a book, journal, enjoy a hobby, or take a peaceful walk."
};

result.textContent = activities[mood];
