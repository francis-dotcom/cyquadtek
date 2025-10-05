

import React from "react";

// Badge type
type Badge = {
  label: string;
  icon: string;
  color: string; // bootstrap bg color suffix
};

type TeamMember = {
  initials: string;
  name: string;
  role: string;
  description: string;
  badges: Badge[];
  circleBg?: string;
};

// Bootstrap icon mapping
const iconClassMap: Record<string, string> = {
  cloud: "bi-cloud-fill",
  gear: "bi-gear-fill",
  shield: "bi-shield-lock-fill",
  code: "bi-code-slash",
  apple: "bi-apple",
  lock: "bi-lock-fill",
  terminal: "bi-terminal-dash",
  star: "bi-star-fill",
  check: "bi-check2-circle",
  architect: "bi-diagram-3",
  backend: "bi-server",
};

// Team data
const teamMembers: TeamMember[] = [
  {
    initials: "FO",
    name: "Francis O",
    role: "Full Stack Cloud Engineer",
    description:
      "Expert in cloud-native architecture and enterprise software delivery. Passionate about building scalable and secure solutions.",
    badges: [
      { label: "MultiCloud", icon: "cloud", color: "primary" },
      { label: "Backend Engineer", icon: "backend", color: "warning" },
      { label: "Architect", icon: "architect", color: "success" },

  
    ],
    circleBg: "primary",
  },
  {
    initials: "KW",
    name: "Karena Williams",
    role: "Mobile Developer",
    description:
      "Skilled mobile developer delivering modern, user-friendly apps across Android and iOS ecosystems.",
    badges: [
      { label: "React Native", icon: "code", color: "info" },
      { label: "iOS", icon: "apple", color: "dark" },
    ],
    circleBg: "secondary",
  },
  {
    initials: "MT",
    name: "Micheal Thomas",
    role: "CyberSecurity Expert",
    description:
      "Focused on securing enterprise environments with expertise in penetration testing and compliance frameworks.",
    badges: [
      { label: "Security", icon: "shield", color: "danger" },
      { label: "Compliance", icon: "check", color: "success" },
      { label: "PenTesting", icon: "lock", color: "secondary" },
    ],
    circleBg: "dark",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>CHECK OUR TEAM</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((m, idx) => (
            <div
              key={idx}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <div className="member p-4 bg-white rounded-3 shadow-sm h-100 text-center">
                {/* Initials Circle */}
                <div className="d-flex justify-content-center mb-3">
                  <div
                    className={`rounded-circle bg-${m.circleBg ?? "primary"} text-white fw-bold d-flex align-items-center justify-content-center`}
                    style={{ width: 72, height: 72, fontSize: 22 }}
                  >
                    {m.initials}
                  </div>
                </div>

                {/* Name & Role */}
                <h4 className="mb-1">{m.name}</h4>
                <span className="text-muted d-block mb-2">{m.role}</span>

                {/* Compact Colored Badges */}
                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                  {m.badges.map((b, i) => (
                    <span
                      key={i}
                      className={`badge rounded-pill bg-${b.color} d-inline-flex align-items-center gap-1`}
                      style={{
                        fontSize: "0.8rem",
                        padding: "4px 8px",
                        maxWidth: "120px",
                      }}
                    >
                      <i className={`bi ${iconClassMap[b.icon]}`} />
                      <span className="text-truncate">{b.label}</span>
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="small fst-italic">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


