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

        if (includesAny([ "project", "projects", "work", "view your work", "what have you built", "open your project", "your creativity", "show me your creativity" ])) {
            addMsg("Sure 😊 Taking you to my projects📂", "bot-msg");
            setTimeout(() => {
                window.location.href = "project.html";
            }, 1500);
        }

        else if (includesAny([ "introduce yourself", "about you", "about tanisa", "who are you", "your background" ])) {
            addMsg("Let me introduce myself ✨", "bot-msg");
            setTimeout(() => {
                window.location.href = "about.html";
            }, 1500);
        }

        else if (includesAny([ "education", "study", "college", "degree", "qualification" ])) {
            addMsg("Here are my education details 🎓", "bot-msg");
            setTimeout(() => {
                window.location.href = "education.html";
            }, 1500);
        }

        else if (includesAny([ "certificate", "certificates", "achievement", "achievements", "awards", "accomplishments", "credentials" ])) {
            addMsg("These are my achievements 📜✨", "bot-msg");
            setTimeout(() => {
                window.location.href = "certificate.html";
            }, 1500);
        }

        else if (includesAny([ "contact", "reach you", "email", "phone", "connect" ])) {
            addMsg("You can contact me here 📞😊", "bot-msg");
            setTimeout(() => {
                window.location.href = "contact.html";
            }, 1500);
        }

        /* Project summaries */
        else if (includesAny([ "face emotion", "real time face emotion detection", "tell me about real time face emotion detection project", "what's in real time face emotion detection project" ])) {
            addMsg(
                "Real-Time Face Emotion Detection uses AI and OpenCV to analyze facial expressions and identify human emotions instantly. It processes live camera input to classify emotions like happy, sad, angry, or surprised in real time 😊📷",
                "bot-msg"
            );
        }

        else if (includesAny([ "futurepath", "tell me about futurepath project", "what's in futurepath project" ])) {
            addMsg(
                "FutureP@th: Students one step solution is a student guidance web app that helps students find courses, subjects, and scholarships after 10th, 12th, and graduation. It also helps to find goverment jobs in west bengal. 📚✨",
                "bot-msg"
            );
        }

        else if (includesAny([ "cara", "cara e-commerce website", "tell me about cara e-commerce website project", "cara e-commerce website project", "what's in cara e-commerce website project" ])) {
            addMsg(
                "Cara is a modern, responsive eCommerce website designed for a smooth online shopping experience. It features interactive product listings, clean UI design, and mobile-friendly layouts built using HTML, CSS, and JavaScript. 🛍️✨",
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

        else if (includesAny([ "desktop chatbot", "chatbot", "Tani Bot", ])) {
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

        else if (includesAny([ "Fine", "Good", "Nice", "Perfect", "It's ok" ])) {
            addMsg(
                "Thats great 😊. How can I help you today?",
                "bot-msg"
            );
        }

        else if (includesAny([ "Thank You", "Thanks", "Bye", "See you later" ])) {
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