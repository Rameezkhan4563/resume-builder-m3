document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeContainer = document.getElementById("resume-container") as HTMLElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Form data values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const contact = (document.getElementById("contact") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
        const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];

        // Clear previous resume
        resumeContainer.innerHTML = "";

        // Begin creating resume content
        let resumeContent = `
            <div class="resume animated-fadeIn">
                <h1 class="resume-title">Resume</h1>
                <section class="resume-section personal-info">
        `;

        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function (e) {
                resumeContent += `<img src="${(e.target as FileReader).result}" alt="Profile Picture" class="profile-pic animated-bounceIn" />`;
                resumeContent += `<p class="label animated-fadeIn"><strong>Name:</strong> ${name}</p>`;
                resumeContent += `<p><strong>Contact Number:</strong> ${contact}</p>`;
                resumeContent += `<p><strong>Email:</strong> ${email}</p>`;
                resumeContent += `</section>`;
                addRemainingSections();
            };
            reader.readAsDataURL(profilePic);
        } else {
            // Add name if no profile picture
            resumeContent += `<p class="label animated-fadeIn"><strong>Name:</strong> ${name}</p>`;
            resumeContent += `<p><strong>Contact Number:</strong> ${contact}</p>`;
            resumeContent += `<p><strong>Email:</strong> ${email}</p>`;
            resumeContent += `</section>`;
            addRemainingSections();
        }

        function addRemainingSections() {
            resumeContent += `
                <section class="resume-section education animated-slideInLeft">
                    <h2>Education</h2>
                    <p>${education}</p>
                </section>
                <section class="resume-section skills animated-slideInRight">
                    <h2>Skills</h2>
                    <p>${skills.replace(/\n/g, '<br>')}</p>
                </section>
                <section class="resume-section work-experience animated-slideInUp">
                    <h2>Work Experience</h2>
                    <p>${workExperience.replace(/\n/g, '<br>')}</p>
                </section>
            </div>`;
            
            resumeContainer.innerHTML = resumeContent;
            resumeContainer.style.display = "block";
        }
    });
});
