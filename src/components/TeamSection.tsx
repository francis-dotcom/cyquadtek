import { useState, useEffect } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
  id: 1,
  name: "Francis O.",
  role: "Full-Stack Cloud & AI Engineer",
  bio: "Francis is a multidisciplinary engineer skilled in front-end, back-end, and cloud-native development. With expertise in React, Node.js, and Python, he builds scalable digital solutions while leveraging AI and machine learning to deliver intelligent, data-driven applications."
  },

  {
  id: 2,
  name: "Jane D.",
  role: "Mobile Developer & UI/UX Designer",
  bio: "Jane blends creativity with engineering to deliver seamless mobile experiences across iOS and Android. She is skilled in Swift, SwiftUI, and Xcode for iOS development, as well as Kotlin, Java, and Android Studio for Android. On the design side, she uses Figma, Sketch, and Adobe XD to craft human-centered, accessible interfaces. Jane also integrates tools like React Native and Flutter for cross-platform development, and applies user testing frameworks such as Maze and Hotjar to validate and refine her designs. Her approach ensures that every app is not only functional and performant, but also delightful to use."
  },
  {
  id: 3,
  name: "Michael T.",
  role: "Cybersecurity & Compliance Lead",
  bio: "Michael combines over a decade of agile project management with deep technical expertise in cybersecurity and compliance. He has led initiatives in vulnerability management, penetration testing, and cloud security, leveraging tools such as Wireshark, Nessus, Burp Suite, and Metasploit. Michael also implements compliance frameworks including ISO 27001, NIST, and SOC 2, and is experienced with SIEM platforms like Splunk and Azure Sentinel to ensure continuous monitoring, risk mitigation, and regulatory alignment across enterprise systems."
  },

];

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 992);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Get initials
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section id="team" className="team section light-background">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>Our dedicated professionals</p>
        </div>

        {/* Desktop view (inline bios with initials only) */}
        {!isMobile && (
          <div className="row gy-4">
            {team.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 p-3 d-flex flex-column align-items-start">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar-circle me-3">
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{member.name}</h5>
                      <small className="text-primary">{member.role}</small>
                    </div>
                  </div>
                  <p className="text-muted small">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile view (strips with initials → modal for bio) */}
        {/* Mobile view (strips with initials → modal for bio) */}
        {isMobile && (
          <div className="d-flex flex-column gap-3">
            {team.map((member) => (
              <button
                key={member.id}
                className="team-member-strip d-flex align-items-center p-3 border-0 bg-white shadow-sm"
                onClick={() => setActiveMember(member)}
              >
                <div className="avatar-circle me-3">
                  {getInitials(member.name)}
                </div>
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">{member.name}</span>
                  <small className="text-muted">{member.role}</small>
                </div>
              </button>
            ))}
          </div>
        )}
        {/* {isMobile && (
          <div className="list-group">
            {team.map((member) => (
              <button
                key={member.id}
                className="list-group-item list-group-item-action d-flex align-items-center"
                onClick={() => setActiveMember(member)}
              >
                <div className="avatar-circle me-3">
                  {getInitials(member.name)}
                </div>
                <div className="d-flex flex-column text-start">
                  <span className="fw-bold">{member.name}</span>
                  <small className="text-muted">{member.role}</small>
                </div>
              </button>
            ))}
          </div>
        )} */}

        {/* Modal for mobile */}
        {isMobile && activeMember && (
          <div
            className="modal-backdrop-custom"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="modal-content p-4 rounded-4 shadow bg-white"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90%" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">{activeMember.name}</h5>
                <button
                  className="btn-close"
                  onClick={() => setActiveMember(null)}
                />
              </div>
              <p className="text-primary fw-semibold">{activeMember.role}</p>
              <p className="text-muted">{activeMember.bio}</p>
            </div>
          </div>
        )}
      </div>

      {/* Styling */}
      <style>{`
        .avatar-circle {
          width: 45px;
          height: 45px;
          background: #007bff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
        }
        .modal-backdrop-custom {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          padding: 1rem;
        }
      `}</style>
    </section>
  );
}
