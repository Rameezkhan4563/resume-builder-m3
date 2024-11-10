document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContainer = document.getElementById("resume-container");
    form.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        // Form data values
        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var email = document.getElementById("email").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var workExperience = document.getElementById("work-experience").value;
        var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
        // Clear previous resume
        resumeContainer.innerHTML = "";
        // Begin creating resume content
        var resumeContent = "\n            <div class=\"resume animated-fadeIn\">\n                <h1 class=\"resume-title\">Resume</h1>\n                <section class=\"resume-section personal-info\">\n        ";
        if (profilePic) {
            var reader = new FileReader();
            reader.onload = function (e) {
                resumeContent += "<img src=\"".concat(e.target.result, "\" alt=\"Profile Picture\" class=\"profile-pic animated-bounceIn\" />");
                resumeContent += "<p class=\"label animated-fadeIn\"><strong>Name:</strong> ".concat(name, "</p>");
                resumeContent += "<p><strong>Contact Number:</strong> ".concat(contact, "</p>");
                resumeContent += "<p><strong>Email:</strong> ".concat(email, "</p>");
                resumeContent += "</section>";
                addRemainingSections();
            };
            reader.readAsDataURL(profilePic);
        }
        else {
            // Add name if no profile picture
            resumeContent += "<p class=\"label animated-fadeIn\"><strong>Name:</strong> ".concat(name, "</p>");
            resumeContent += "<p><strong>Contact Number:</strong> ".concat(contact, "</p>");
            resumeContent += "<p><strong>Email:</strong> ".concat(email, "</p>");
            resumeContent += "</section>";
            addRemainingSections();
        }
        function addRemainingSections() {
            resumeContent += "\n                <section class=\"resume-section education animated-slideInLeft\">\n                    <h2>Education</h2>\n                    <p>".concat(education, "</p>\n                </section>\n                <section class=\"resume-section skills animated-slideInRight\">\n                    <h2>Skills</h2>\n                    <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n                </section>\n                <section class=\"resume-section work-experience animated-slideInUp\">\n                    <h2>Work Experience</h2>\n                    <p>").concat(workExperience.replace(/\n/g, '<br>'), "</p>\n                </section>\n            </div>");
            resumeContainer.innerHTML = resumeContent;
            resumeContainer.style.display = "block";
        }
    });
});
