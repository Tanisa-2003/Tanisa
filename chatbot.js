function initChatbot(){    
    const icon = document.getElementById("chatbot-icon");
    const box = document.getElementById("chatbot-box");
    const closeBtn = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const input = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");


    if (!icon || !box) {
        console.error("Chatbot elements not found");
        return;
    }

    /* 🔁 RESTORE CHAT HISTORY */
    const history = JSON.parse(sessionStorage.getItem("chatHistory")) || [];
    history.forEach(m => {
        const div = document.createElement("div");
        div.className = m.cls;
        div.innerText = m.text;
        chatBody.appendChild(div);
    });

    console.log("Chatbot initialized ✅");

    /* Open / Close */
    icon.onclick = () => box.style.display = "flex";
    closeBtn.onclick = () => box.style.display = "none";

    /* Send Message */
    sendBtn.onclick = handleMessage;
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") handleMessage();       
    });

    function handleMessage() {
        const msg = input.value.toLowerCase().trim();
        if (!msg) return;

        addMsg(msg, "user-msg");
        input.value = "";
        setTimeout(() => respond(msg), 500);
    }

    /* Add message */
    function addMsg(text, cls) {
        const div = document.createElement("div");
        div.className = cls;
        div.innerText = text;
        chatBody.appendChild(div);

    
        let history = JSON.parse(sessionStorage.getItem("chatHistory")) || [];
        history.push({ text, cls });
        sessionStorage.setItem("chatHistory", JSON.stringify(history));

        chatBody.scrollTop = chatBody.scrollHeight;
    }

    /* BOT LOGIC */
    function respond(msg) {

        /* Normalize message */
        msg = msg.toLowerCase();

        /* ===== INTENT HELPERS ===== */
        const includesAny = (words) =>
            words.some(word => msg.includes(word));

        /* ===== NAVIGATION INTENTS ===== */

        if (includesAny([ "project", "projects", "work", "view your work", "what have you built", "open your project", "your creativity", "show me your creativity", "what she have done", "what she creats",   "show me your projects",
        "what projects have you built", "what have you worked on", "tell me about your projects", "show your work", "what are your best projects",
        "what have you developed", "portfolio projects", "can i see your projects" ])) {
            addMsg("Sure 😊 Taking you to my projects📂", "bot-msg");
            setTimeout(() => {
                window.location.href = "project.html";
            }, 1500);
        }

        else if (includesAny([ "Who are you?", "tell me about yourself", "introduce yourself", "can you introduce yourself?", "what is your introduction?", "tell me about Tanisa", "who is Tanisa Parui?", 
            "give me your profile", "what do you do?", "what are you studying?", "what is your background?", "tell me something about yourself", "i'd like to know about you", "about you", "about yourself", 
            "who am I talking to?", "your background" ])) {
            addMsg("Let me introduce myself ✨", "bot-msg");
            setTimeout(() => {
                window.location.href = "about.html";
            }, 1500);
        }

        else if (includesAny([ "education", "study", "college", "degree", "qualification", "course", "what is your qualification?",
            "what are you studying?", "which course are you pursuing?", "what is your educational background?",
            "where did you study?", "are you an MCA student?", "what degree do you have?" ])) {
            addMsg("Here are my education details 🎓", "bot-msg");
            setTimeout(() => {
                window.location.href = "education.html";
            }, 1500);
        }

        else if (includesAny([ "certificate", "certificates", "certification", "certifications", "achievement", "achievements", "awards", 
            "accomplishments", "credentials", "show certificates", "show certifications", "your certificates", "your achievements", "what certifications do you have",
            "what certificates do you have", "any achievements", "show your achievements" ])) {
            addMsg("These are my achievements 📜✨", "bot-msg");
            setTimeout(() => {
                window.location.href = "certificate.html";
            }, 1500);
        }

        else if (includesAny([ "contact", "reach you", "email", "phone", "connect", "contact details", "contact information", "how can i contact you",
            "how to contact you", "reach out", "get in touch", "connect with you", "mobile number", "linkedin", "github", "social media", "contact page",
            "talk to you", "message you" ])) {
            addMsg("You can contact me here 📞😊", "bot-msg");
            setTimeout(() => {
                window.location.href = "contact.html";
            }, 1500);
        }

        else if (includesAny([ "resume", "cv", "curriculum vitae", "download resume", "view resume", "show resume" ])) {
            addMsg(
                "📄 You can view or download my resume to learn more about my skills, education, projects, and experience.",
                "bot-msg" );
            setTimeout(() => {
                window.location.href = "portfolio.html";
            }, 1500);
        }        

        /* Project summaries */

        else if (includesAny([ "moodtune", "mood tune", "tell me about moodtune", "what is moodtune", "moodtune project", "what's in moodtune project",
            "tell me about mood tune project", "what technologies you used in moodtune"
        ])) {
            addMsg(
                "MoodTune is an AI-powered mood analysis application that detects a user's emotional state and provides personalized recommendations such as music, activities, or insights based on the detected mood. It combines machine learning and user-friendly design to create an engaging and supportive experience. 🎵😊. \n\n🛠 Technologies used: \n• Python\n• Machine Learning\n• Pandas\n• NumPy\n• Scikit-learn\n• HTML\n• CSS\n• JavaScript\n• Flask",
                "bot-msg"
            );
        }

        else if (includesAny([ "face emotion", "real time face emotion detection", "tell me about real time face emotion detection project", 
            "what's in real time face emotion detection project", "what technologies you used in face emotion" ])) {
            addMsg(
                "😊 Real-Time Face Emotion Detection is an AI-powered application that analyzes facial expressions and identifies human emotions in real time. It processes live camera input to classify emotions such as happy, sad, angry, surprised, and more 😊📷.\n\n🛠 Technologies Used:\n• Python\n• OpenCV\n• TensorFlow / Keras\n• NumPy\n• Pandas\n• Machine Learning\n• Deep Learning",
                "bot-msg"
            );
        }

        else if (includesAny([ "futurepath", "tell me about futurepath project", "what's in futurepath project", "what technologies you used in futurepath" ])) {
            addMsg(
                "📚 FutureP@th: Students' One-Step Solution is a student guidance web application that helps students discover courses, subjects, scholarships, and government job opportunities in West Bengal after 10th, 12th, and graduation 📚✨.\n\n🛠 Technologies Used:\n• AppSheet\n• Google Apps Script\n• Google Sheets\n• Google Sites\n• No-Code Development ",
                "bot-msg"
            );
        }

        else if (includesAny([ "calculator", "tell me about calculator", "what's in calculator project" ])) {
            addMsg(
                "It is a responsive scientific calculator built using HTML, CSS, and JavaScript.",
                "bot-msg"
            );
        }

        else if (includesAny([ "connect4", "tell me about connect4 game", "what's in connect4 game project" ])) {
            addMsg(
                "Connect 4 is a classic two-player strategy game where players take turns dropping discs into a grid. The goal is to connect four of your discs in a row—horizontally, vertically, or diagonally—before your opponent 🎮🟡🔴",
                "bot-msg"
            );
        }

        else if (includesAny([ "todo", "tell me about todo app project", "todo app", "what's in todo app project" ])) {
            addMsg(
                "The To-Do App is built using HTML, CSS, and JavaScript to manage daily tasks efficiently.",
                "bot-msg"
            );
        }

        else if (includesAny([ "basic calculator", "tell me about basic calculator", "what's in basic calculator" ])) {
            addMsg(
                "A simple desktop calculator built using Python’s Tkinter library. It performs basic arithmetic operations with a clean GUI and easy button-based input.",
                "bot-msg"
            );
        }

        else if (includesAny([ "iris flower", "iris flower classification", "tell me about iris flower classification", "what's in iris flower classification project" ])) {
            addMsg(
                "A machine learning project that classifies iris flowers into Setosa, Versicolor, or Virginica using petal and sepal measurements. It uses supervised learning to accurately predict the flower species based on input features. 🌸",
                "bot-msg"
            );
        }

        else if (includesAny([ "Personality Prediction", "Personality Predictor", "tell me about Personality Predictor", "what's in Personality Predictor project" ])) {
            addMsg(
                "An AI/ML-based project that predicts personality traits based on user input data. It analyzes patterns in responses to estimate behavioral characteristics accurately. 🧠",
                "bot-msg"
            );
        }

        else if (includesAny([ "Water Intake", "Water Intake Predictoion", "Water Intake Predictor", "tell me about Water Intake Predictor", "what's in Water Intake Predictor project" ])) {
            addMsg(
                "A machine learning project that predicts a person’s daily water intake based on health and lifestyle factors. It helps users stay hydrated by providing personalized water consumption recommendations. 💧",
                "bot-msg"
            );
        }

        else if (includesAny([ "Spam Mail", "Spam Mail Detection", "Spam Mail Detector", "tell me about Spam Mail Detector", "what's in Spam Mail Detector project" ])) {
            addMsg(
                "A machine learning–based application that classifies emails as Spam or Not Spam using text analysis. It helps users filter unwanted emails and improve inbox security. 📧",
                "bot-msg"
            );
        }

        else if (includesAny([ "House price", "Real estate", "Real Estate Price Prediction", "House Price Prediction", "tell me about House Price Prediction", "what's in House Price Prediction" ])) {
            addMsg(
                "A machine learning project that predicts house prices based on features like area, number of rooms, and location-related factors. It helps estimate property value using data-driven predictive models.🏠",
                "bot-msg"
            );
        }

        else if (includesAny([ "desktop chatbot", "chatbot", "tani Bot", ])) {
            addMsg(
                "A desktop-based chatbot that interacts with users through a simple GUI to answer queries and assist with navigation or tasks. It uses predefined logic (and can be extended with AI) to provide quick, user-friendly responses. 🤖",
                "bot-msg"
            );
        }

        else if (includesAny([ "hi", "hello", "hey", "hii", "hola" ])) {
            addMsg(
                "Hello 👋 I'm Tanisa's assistant. How is your day going?",
                "bot-msg"
            );
        }

        else if (includesAny([ "fine", "good", "nice", "perfect", "it's ok" ])) {
            addMsg(
                "Thats great 😊. How can I help you today?",
                "bot-msg"
            );
        }

        else if (includesAny([ "thank You", "thanks", "bye", "see you later" ])) {
            addMsg(
                "Thank you for visiting Tanisa's portfolio! 💜 Have a great day, and don't hesitate to reach out through the contact section if you'd like to connect. 🚀",
                "bot-msg"
            );
        }        
        /* Default */
        else {
            addMsg(
                "Hmm 🤔 I may not know that yet.\nYou can ask me about projects, education, certificates, or contact details!",
                "bot-msg"
            );
        }
    }
}